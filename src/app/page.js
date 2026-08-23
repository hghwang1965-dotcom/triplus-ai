import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "AI Insight Korea — 인사이트 · 비즈니스 · AI 기술 · 여행",
  description: "경험에서 나온 인사이트, 기술로 만드는 미래. 산업 인사이트, 글로벌 비즈니스, AI 기술, 여행 콘텐츠를 제공합니다.",
};

const categories = [
  {
    icon: "📰",
    tag: "INSIGHTS",
    title: "Insights",
    desc: "AI 산업 동향, 에너지 시장, 글로벌 경제, 현장 리포트 등 분석과 해설 중심의 인사이트 콘텐츠.",
    href: "/insights",
    cta: "인사이트 보기",
    subs: ["AI 산업 동향", "에너지 시장", "농업 트렌드", "글로벌 경제", "칼럼", "인터뷰"],
    color: "from-orange-500/20 to-amber-500/10",
    border: "hover:border-orange-400/50",
  },
  {
    icon: "💼",
    tag: "GLOBAL BUSINESS",
    title: "Global Business",
    desc: "필리핀 ODA, 스마트팜, 재생에너지, 해외진출 전략 등 현장 경험 기반의 글로벌 비즈니스 인사이트.",
    href: "/business",
    cta: "비즈니스 인사이트 보기",
    subs: ["필리핀", "ODA", "해외진출", "수출입", "스마트팜", "재생에너지", "물류"],
    color: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-400/50",
  },
  {
    icon: "🤖",
    tag: "AI & TECHNOLOGY",
    title: "AI & Tech",
    desc: "Vision AI, LLM, Smart Factory, YOLO 등 실제 프로젝트에서 얻은 AI·기술 개발 경험을 공유합니다.",
    href: "/ai",
    cta: "AI 기술 보기",
    subs: ["AI", "Vision AI", "LLM", "Smart Factory", "Smart Farm", "IoT", "YOLO"],
    color: "from-violet-500/20 to-purple-500/10",
    border: "hover:border-violet-400/50",
  },
  {
    icon: "🌍",
    tag: "TRAVEL",
    title: "Travel",
    desc: "전 세계 여행지 가이드, 항공권·호텔·투어 정보, 여행 꿀팁까지 직접 경험한 여행 콘텐츠를 제공합니다.",
    href: "/travel",
    cta: "여행 콘텐츠 보기",
    subs: ["해외여행", "국내여행", "여행일정", "항공권", "호텔", "맛집", "여행꿀팁"],
    color: "from-blue-500/20 to-cyan-500/10",
    border: "hover:border-blue-400/50",
  },
];

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "");
}
function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export default async function HomePage() {
  const posts = await getPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-violet-500/15 blur-3xl" />
          <div className="absolute bottom-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <p className="mb-4 text-sm tracking-[0.3em] text-blue-400 uppercase">
          Experience · Technology · Insight
        </p>

        <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          AI Insight Korea
        </h1>

        <p className="mb-4 text-2xl font-semibold text-slate-200 md:text-3xl">
          경험에서 나온 인사이트,
        </p>
        <p className="mb-10 text-2xl font-semibold text-slate-200 md:text-3xl">
          기술로 만드는 미래
        </p>

        <p className="mb-12 max-w-2xl text-slate-400">
          산업 인사이트 · 글로벌 비즈니스 · AI 기술 · 여행
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-blue-400/50 hover:bg-white/10 hover:text-blue-400"
            >
              {cat.icon} {cat.title}
            </Link>
          ))}
        </div>

        {/* 스크롤 유도 */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="h-8 w-0.5 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ── 4개 카테고리 섹션 ── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-sm tracking-[0.3em] text-blue-400">WHAT WE COVER</p>
          <h2 className="mb-16 text-center text-4xl font-bold">4가지 핵심 영역</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${cat.color} p-8 backdrop-blur transition ${cat.border}`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-xs tracking-[0.2em] text-slate-400">{cat.tag}</p>
                    <h3 className="text-2xl font-bold">
                      <span className="mr-2">{cat.icon}</span>
                      {cat.title}
                    </h3>
                  </div>
                  <Link
                    href={cat.href}
                    className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                  >
                    보기 →
                  </Link>
                </div>

                <p className="mb-6 leading-7 text-slate-300">{cat.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {cat.subs.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 최신 콘텐츠 ── */}
      {recentPosts.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">LATEST CONTENT</p>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-3xl font-bold">최신 콘텐츠</h2>
              <Link
                href="/travel"
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
              >
                콘텐츠 전체 보기 →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {recentPosts.map((post) => (
                <PostCard
                  key={post.id}
                  category="콘텐츠"
                  title={stripHtml(post.title?.rendered || "")}
                  description={stripHtml(post.excerpt?.rendered || "").slice(0, 120)}
                  slug={post.slug}
                  image={getFeaturedImage(post)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 파트너 배너 ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">PARTNER DEALS</p>
          <h2 className="mb-10 text-3xl font-bold">파트너 서비스</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "항공권 특가", badge: "최대 40% 할인", color: "from-blue-500/20 to-blue-600/10" },
              { label: "호텔 특가", badge: "오늘만 특가", color: "from-cyan-500/20 to-cyan-600/10" },
              { label: "투어 패키지", badge: "추천 1위", color: "from-indigo-500/20 to-indigo-600/10" },
            ].map((deal) => (
              <div
                key={deal.label}
                className={`flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r ${deal.color} p-6 transition hover:border-blue-400/40`}
              >
                <span className="text-lg font-semibold">{deal.label}</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                  {deal.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
