import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const metadata = {
  title: "AI & Tech | AI Insight Korea",
  description: "Vision AI, LLM, Smart Factory, YOLO 등 실제 프로젝트에서 얻은 AI·기술 개발 경험을 공유합니다.",
};

const KEYWORDS = ["AI", "YOLO", "LLM", "Vision", "IoT", "개발", "스마트팩토리", "Next.js", "모델", "딥러닝", "머신러닝"];

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "");
}
function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}
function matchesKeywords(post) {
  const text = stripHtml((post.title?.rendered || "") + " " + (post.excerpt?.rendered || "")).toLowerCase();
  return KEYWORDS.some((kw) => text.includes(kw.toLowerCase()));
}

const subcategories = [
  { label: "AI", desc: "인공지능 기술 동향과 실무 적용 사례" },
  { label: "Vision AI", desc: "컴퓨터 비전·이미지 인식 프로젝트" },
  { label: "LLM", desc: "대규모 언어모델 활용과 개발 경험" },
  { label: "Smart Factory", desc: "스마트공장 구축과 AI 적용 사례" },
  { label: "Smart Farm", desc: "AI 기반 스마트팜 기술과 구현" },
  { label: "IoT", desc: "사물인터넷 디바이스·플랫폼 개발" },
  { label: "Next.js", desc: "Next.js 웹 개발 경험과 팁" },
  { label: "YOLO", desc: "YOLO 객체 탐지 모델 활용기" },
  { label: "개발일지", desc: "실제 프로젝트 개발 과정과 회고" },
];

export default async function AIPage() {
  const allPosts = await getPosts();
  const posts = allPosts.filter(matchesKeywords);

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-violet-400">AI & TECHNOLOGY</p>
        <h1 className="mb-6 text-5xl font-bold">🤖 AI & Tech</h1>
        <p className="mb-16 max-w-2xl text-lg leading-8 text-slate-300">
          Vision AI, LLM, Smart Factory, YOLO 등 실제 프로젝트에서 얻은 AI·기술 개발 경험을 솔직하게 공유합니다.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/10"
            >
              <h2 className="mb-3 text-xl font-bold text-violet-400">{cat.label}</h2>
              <p className="text-sm leading-7 text-slate-300">{cat.desc}</p>
            </div>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="mt-16">
            <p className="mb-3 text-sm tracking-[0.3em] text-violet-400">AI & TECH BLOG</p>
            <h2 className="mb-12 text-3xl font-bold">AI & Tech 블로그</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  category="AI & Tech"
                  title={stripHtml(post.title?.rendered || "")}
                  description={stripHtml(post.excerpt?.rendered || "").slice(0, 120)}
                  slug={post.slug}
                  image={getFeaturedImage(post)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-slate-400">콘텐츠를 준비 중입니다. 곧 업데이트됩니다.</p>
          </div>
        )}
      </section>
    </main>
  );
}
