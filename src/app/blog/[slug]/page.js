import { getPostBySlug, getRelatedPosts } from "@/lib/wordpress";
import TableOfContents from "@/components/TableOfContents";
import PostCard from "@/components/PostCard";
import ShareButtons from "@/components/ShareButtons";

function removeTocBlock(html) {
  const markers = ["ez-toc-container", "toc_container", "wp-block-table-of-contents", "rank-math-toc"];
  let result = html;

  for (const marker of markers) {
    const idx = result.indexOf(marker);
    if (idx === -1) continue;

    const divStart = result.lastIndexOf("<div", idx);
    if (divStart === -1) continue;

    let depth = 0;
    let i = divStart;
    while (i < result.length) {
      if (result.slice(i, i + 4) === "<div") {
        depth++;
        i += 4;
      } else if (result.slice(i, i + 6) === "</div>") {
        depth--;
        if (depth === 0) {
          result = result.slice(0, divStart) + result.slice(i + 6);
          break;
        }
        i += 6;
      } else {
        i++;
      }
    }
  }

  // nav 기반 TOC (wp-block-table-of-contents)
  result = result.replace(/<nav[^>]*class="[^"]*wp-block-table-of-contents[^"]*"[^>]*>[\s\S]*?<\/nav>/gi, "");

  return result;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post
      ? `${post.title.rendered} | AI Insight Korea`
      : "Blog | AI Insight Korea",
    description:
      post?.excerpt?.rendered?.replace(/<[^>]+>/g, "").slice(0, 150) ||
      "AI Insight Korea 여행 콘텐츠입니다.",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">글을 찾을 수 없습니다.</h1>
        </section>
      </main>
    );
  }

  const cleanContent = removeTocBlock(post.content.rendered)
    // lazy-load 플러그인이 data-src에 숨긴 실제 URL을 src로 복원
    .replace(/\sdata-lazy-src="([^"]+)"/gi, ' src="$1"')
    .replace(/\sdata-src="([^"]+)"/gi, ' src="$1"')
    // 복원 후 남은 base64 플레이스홀더 src 제거
    .replace(/\ssrc="data:image[^"]*"/gi, '');

  const plainText = cleanContent.replace(/<[^>]+>/g, "");
  const readingTime = Math.ceil(plainText.split(" ").length / 200);

  const categoryId = post.categories?.[0];
  const relatedPosts = categoryId
    ? await getRelatedPosts(categoryId, slug)
    : [];

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <article className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          BLOG
        </p>

        <h1
          className="mb-6 text-5xl font-bold leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* 작성일 + 읽는 시간 */}
        <div className="mb-8 flex items-center gap-4 text-sm text-slate-400">
          <span>{new Date(post.date).toLocaleDateString("ko-KR")}</span>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="mb-10 h-[420px] w-full rounded-3xl object-cover border border-white/10"
          />
        )}

        <TableOfContents />

        <div
          className="blog-content prose prose-invert prose-lg max-w-none
                     prose-headings:scroll-mt-28
                     prose-headings:text-white
                     prose-p:text-slate-300
                     prose-a:text-blue-400
                     prose-strong:text-white
                     prose-img:rounded-3xl
                     prose-img:border
                     prose-img:border-white/10"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        {/* 공유 버튼 */}
        <ShareButtons title={post.title.rendered} slug={slug} />
      </article>

      {/* 관련글 */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">관련 글</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((related) => {
              const image =
                related._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
              const excerpt = related.excerpt.rendered
                .replace(/<[^>]+>/g, "")
                .slice(0, 100);

              return (
                <PostCard
                  key={related.id}
                  category="여행 콘텐츠"
                  title={related.title.rendered}
                  description={excerpt}
                  slug={related.slug}
                  image={image}
                />
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
