import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Insights | AI Insight Korea",
  description: "AI 산업 동향, 에너지 시장, 글로벌 경제, 현장 리포트 등 분석과 해설 중심의 인사이트 콘텐츠.",
};

const KEYWORDS = ["인사이트", "동향", "분석", "트렌드", "칼럼", "인터뷰", "리포트", "경제", "전망", "시장", "정부", "산업"];

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
  { label: "AI 산업 동향", desc: "국내외 AI 산업 최신 동향과 전망 분석" },
  { label: "에너지 시장", desc: "재생에너지·탄소중립 시장 동향과 기회" },
  { label: "농업 트렌드", desc: "스마트농업·푸드테크 글로벌 트렌드" },
  { label: "글로벌 경제", desc: "주요국 경제 지표와 비즈니스 환경 분석" },
  { label: "정부과제", desc: "R&D·정부지원사업 공고와 전략적 접근" },
  { label: "해외 전시회", desc: "글로벌 전시회 참관 리포트와 트렌드" },
  { label: "칼럼", desc: "현장 경험을 바탕으로 한 심층 칼럼" },
  { label: "인터뷰", desc: "현장 전문가·기업인 인터뷰" },
  { label: "현장 리포트", desc: "해외 현지 방문·시찰 생생한 리포트" },
];

export default async function InsightsPage() {
  const allPosts = await getPosts();
  const posts = allPosts.filter(matchesKeywords);

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-orange-400">INSIGHTS</p>
        <h1 className="mb-6 text-5xl font-bold">📰 Insights</h1>
        <p className="mb-16 max-w-2xl text-lg leading-8 text-slate-300">
          뉴스를 그대로 옮기는 곳이 아닙니다. AI 산업 동향, 에너지 시장, 글로벌 경제를 분석하고 해설하는 인사이트 공간입니다.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/10"
            >
              <h2 className="mb-3 text-xl font-bold text-orange-400">{cat.label}</h2>
              <p className="text-sm leading-7 text-slate-300">{cat.desc}</p>
            </div>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="mt-16">
            <p className="mb-3 text-sm tracking-[0.3em] text-orange-400">INSIGHTS BLOG</p>
            <h2 className="mb-12 text-3xl font-bold">인사이트 블로그</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  category="Insights"
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
