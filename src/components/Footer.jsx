import Link from "next/link";

const sections = [
  {
    title: "📰 Insights",
    links: ["AI 산업 동향", "에너지 시장", "글로벌 경제", "칼럼", "인터뷰", "현장 리포트"],
    href: "/insights",
  },
  {
    title: "💼 Global Business",
    links: ["필리핀", "ODA", "해외진출", "스마트팜", "재생에너지", "물류"],
    href: "/business",
  },
  {
    title: "🤖 AI & Tech",
    links: ["AI", "Vision AI", "LLM", "Smart Factory", "IoT", "YOLO"],
    href: "/ai",
  },
  {
    title: "🌍 Travel",
    links: ["해외여행", "국내여행", "여행일정", "항공권", "호텔", "맛집"],
    href: "/travel",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="mb-12 grid gap-10 md:grid-cols-5">

          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-xl font-bold text-blue-400">AI Insight Korea</h2>
            <p className="text-sm leading-7 text-slate-400">
              경험에서 나온 인사이트,
              <br />
              기술로 만드는 미래.
            </p>
            <a
              href="mailto:contact@amplusai.com"
              className="mt-4 block text-sm text-slate-500 transition hover:text-blue-400"
            >
              contact@amplusai.com
            </a>
          </div>

          {/* Category Links */}
          {sections.map((sec) => (
            <div key={sec.href}>
              <Link
                href={sec.href}
                className="mb-4 block text-sm font-semibold text-slate-200 transition hover:text-blue-400"
              >
                {sec.title}
              </Link>
              <ul className="flex flex-col gap-2">
                {sec.links.map((label) => (
                  <li key={label}>
                    <span className="text-sm text-slate-500 transition hover:text-slate-300 cursor-default">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 AI Insight Korea. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-300">About</Link>
            <span className="hover:text-slate-300 cursor-default">개인정보처리방침</span>
            <span className="hover:text-slate-300 cursor-default">제휴 안내</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
