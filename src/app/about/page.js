import Link from "next/link";

export const metadata = {
  title: "About | AI Insight Korea",
  description: "경험에서 나온 인사이트, 기술로 만드는 미래. AI Insight Korea는 산업 인사이트·글로벌 비즈니스·AI 기술·여행을 다루는 콘텐츠 플랫폼입니다.",
};

const categories = [
  {
    icon: "📰",
    tag: "INSIGHTS",
    title: "Insights",
    href: "/insights",
    color: "border-orange-400/30 hover:border-orange-400/60",
    accent: "text-orange-400",
    desc: "AI 산업 동향, 에너지 시장, 글로벌 경제, 정부과제 분석까지 뉴스를 그대로 옮기는 게 아닌 현장 관점에서 해석하는 인사이트 공간입니다.",
    subs: ["AI 산업 동향", "에너지 시장", "글로벌 경제", "칼럼", "인터뷰"],
  },
  {
    icon: "💼",
    tag: "GLOBAL BUSINESS",
    title: "Global Business",
    href: "/business",
    color: "border-emerald-400/30 hover:border-emerald-400/60",
    accent: "text-emerald-400",
    desc: "필리핀 ODA 사업, 스마트팜 해외 적용, 재생에너지 프로젝트, 해외진출 전략까지 현장 경험을 바탕으로 한 글로벌 비즈니스 인사이트를 담습니다.",
    subs: ["필리핀", "ODA", "해외진출", "스마트팜", "재생에너지", "물류"],
  },
  {
    icon: "🤖",
    tag: "AI & TECHNOLOGY",
    title: "AI & Tech",
    href: "/ai",
    color: "border-violet-400/30 hover:border-violet-400/60",
    accent: "text-violet-400",
    desc: "Vision AI, LLM, YOLO, IoT, Smart Factory 등 실제 프로젝트에서 부딪힌 문제와 해결 과정을 솔직하게 공유합니다. 개발 일지부터 기술 분석까지.",
    subs: ["AI", "Vision AI", "LLM", "YOLO", "IoT", "개발일지"],
  },
  {
    icon: "🌍",
    tag: "TRAVEL",
    title: "Travel",
    href: "/travel",
    color: "border-blue-400/30 hover:border-blue-400/60",
    accent: "text-blue-400",
    desc: "도쿄, 바르셀로나, 베네치아, 하롱베이, 세부…  직접 다녀온 여행지를 중심으로 항공권·호텔·투어·맛집까지 실전 여행 콘텐츠를 제공합니다.",
    subs: ["해외여행", "국내여행", "여행일정", "항공권", "호텔", "맛집"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm tracking-[0.3em] text-blue-400">ABOUT AI INSIGHT KOREA</p>
        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
          경험에서 나온 인사이트,<br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            기술로 만드는 미래
          </span>
        </h1>
        <p className="max-w-3xl text-xl leading-9 text-slate-300">
          AI Insight Korea는 산업 인사이트·글로벌 비즈니스·AI 기술·여행을 한 곳에서 다루는 전문 콘텐츠 플랫폼입니다.
          교과서가 아닌 현장에서 얻은 경험을 바탕으로, 실질적이고 신뢰할 수 있는 콘텐츠를 제공합니다.
        </p>
      </section>

      {/* ── 미션 ── */}
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-10 backdrop-blur">
          <p className="mb-4 text-sm tracking-[0.3em] text-blue-400">OUR MISSION</p>
          <h2 className="mb-6 text-3xl font-bold">왜 AI Insight Korea인가?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "현장 경험 기반",
                desc: "직접 여행하고, 사업을 추진하고, 기술을 개발하면서 얻은 경험을 콘텐츠로 만듭니다. 검색으로 모은 정보가 아닙니다.",
              },
              {
                title: "4개 영역의 교차점",
                desc: "여행·비즈니스·기술·인사이트는 따로 존재하지 않습니다. 서로 연결되는 지점에서 새로운 가치가 만들어집니다.",
              },
              {
                title: "AI로 더 스마트하게",
                desc: "콘텐츠를 만드는 과정에도 AI를 활용합니다. 더 빠르고 정확하게, 더 유익한 정보를 전달하는 것이 목표입니다.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="mb-3 text-lg font-bold text-blue-300">{item.title}</h3>
                <p className="leading-7 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4개 카테고리 ── */}
      <section className="mx-auto mt-24 max-w-5xl">
        <p className="mb-4 text-sm tracking-[0.3em] text-blue-400">WHAT WE COVER</p>
        <h2 className="mb-12 text-4xl font-bold">4가지 핵심 영역</h2>

        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div
              key={cat.href}
              className={`rounded-3xl border bg-white/5 p-8 backdrop-blur transition ${cat.color}`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <p className={`mb-2 text-xs tracking-[0.2em] ${cat.accent}`}>{cat.tag}</p>
                  <h3 className="mb-4 text-2xl font-bold">
                    {cat.icon} {cat.title}
                  </h3>
                  <p className="max-w-2xl leading-7 text-slate-300">{cat.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                <Link
                  href={cat.href}
                  className={`shrink-0 self-start rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:text-white ${cat.accent.replace("text-", "hover:border-")}`}
                >
                  보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 연락처 ── */}
      <section className="mx-auto mt-24 max-w-5xl pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">CONTACT</p>
          <h2 className="mb-4 text-3xl font-bold">함께 만들어 가요</h2>
          <p className="mb-8 text-slate-400">
            제휴, 기고, 협업 제안은 이메일로 연락 주세요.
          </p>
          <a
            href="mailto:contact@amplusai.com"
            className="inline-block rounded-2xl border border-blue-400/40 bg-blue-500/10 px-8 py-3 font-semibold text-blue-300 transition hover:bg-blue-500/20 hover:text-blue-200"
          >
            contact@amplusai.com
          </a>
        </div>
      </section>

    </main>
  );
}
