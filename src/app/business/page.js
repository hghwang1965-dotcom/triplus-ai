import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Global Business | AI Insight Korea",
  description: "필리핀 ODA, 스마트팜, 재생에너지, 해외진출 전략 등 현장 경험 기반의 글로벌 비즈니스 인사이트.",
};

const KEYWORDS = ["필리핀", "ODA", "해외진출", "수출입", "스마트팜", "재생에너지", "물류", "비즈니스", "콜드체인", "저온"];

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
  { label: "필리핀", desc: "필리핀 현지 비즈니스·ODA·투자 정보" },
  { label: "ODA", desc: "공적개발원조 사업 동향과 참여 전략" },
  { label: "해외진출", desc: "중소기업 해외진출 전략과 사례" },
  { label: "수출입", desc: "수출입 절차, 관세, 무역 실무" },
  { label: "스마트팜", desc: "스마트팜 도입 사례와 해외 적용" },
  { label: "저온저장시설", desc: "콜드체인·저온저장 기술과 비즈니스" },
  { label: "재생에너지", desc: "태양광·풍력 등 재생에너지 사업 정보" },
  { label: "물류", desc: "해외 물류·SCM 전략과 트렌드" },
  { label: "해외시장 분석", desc: "국가별 시장 분석과 진입 전략" },
];

export default async function BusinessPage() {
  const allPosts = await getPosts();
  const posts = allPosts.filter(matchesKeywords);

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-emerald-400">GLOBAL BUSINESS</p>
        <h1 className="mb-6 text-5xl font-bold">💼 Global Business</h1>
        <p className="mb-16 max-w-2xl text-lg leading-8 text-slate-300">
          필리핀 ODA, 스마트팜, 재생에너지, 해외진출 전략 등 현장 경험을 바탕으로 한 글로벌 비즈니스 인사이트를 제공합니다.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10"
            >
              <h2 className="mb-3 text-xl font-bold text-emerald-400">{cat.label}</h2>
              <p className="text-sm leading-7 text-slate-300">{cat.desc}</p>
            </div>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="mt-16">
            <p className="mb-3 text-sm tracking-[0.3em] text-emerald-400">BUSINESS BLOG</p>
            <h2 className="mb-12 text-3xl font-bold">비즈니스 블로그</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  category="Global Business"
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
