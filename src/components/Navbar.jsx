"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/insights",
    label: "Insights",
    sub: [
      { href: "/insights", label: "전체 보기" },
      { href: "/insights?cat=AI산업동향", label: "AI 산업 동향" },
      { href: "/insights?cat=에너지시장", label: "에너지 시장" },
      { href: "/insights?cat=농업트렌드", label: "농업 트렌드" },
      { href: "/insights?cat=글로벌경제", label: "글로벌 경제" },
      { href: "/insights?cat=정부과제", label: "정부과제" },
      { href: "/insights?cat=칼럼", label: "칼럼" },
      { href: "/insights?cat=인터뷰", label: "인터뷰" },
    ],
  },
  {
    href: "/business",
    label: "Global Business",
    sub: [
      { href: "/business", label: "전체 보기" },
      { href: "/business?cat=필리핀", label: "필리핀" },
      { href: "/business?cat=ODA", label: "ODA" },
      { href: "/business?cat=해외진출", label: "해외진출" },
      { href: "/business?cat=수출입", label: "수출입" },
      { href: "/business?cat=스마트팜", label: "스마트팜" },
      { href: "/business?cat=재생에너지", label: "재생에너지" },
      { href: "/business?cat=물류", label: "물류" },
      { href: "/business?cat=해외시장분석", label: "해외시장 분석" },
    ],
  },
  {
    href: "/ai",
    label: "AI & Tech",
    sub: [
      { href: "/ai", label: "전체 보기" },
      { href: "/ai?cat=AI", label: "AI" },
      { href: "/ai?cat=VisionAI", label: "Vision AI" },
      { href: "/ai?cat=LLM", label: "LLM" },
      { href: "/ai?cat=SmartFactory", label: "Smart Factory" },
      { href: "/ai?cat=SmartFarm", label: "Smart Farm" },
      { href: "/ai?cat=IoT", label: "IoT" },
      { href: "/ai?cat=Nextjs", label: "Next.js" },
      { href: "/ai?cat=YOLO", label: "YOLO" },
      { href: "/ai?cat=개발일지", label: "개발일지" },
    ],
  },
  {
    href: "/travel",
    label: "Travel",
    sub: [
      { href: "/travel", label: "전체 여행지" },
      { href: "/travel?cat=해외여행", label: "해외여행" },
      { href: "/travel?cat=국내여행", label: "국내여행" },
      { href: "/travel?cat=여행일정", label: "여행일정" },
      { href: "https://www.trip.com/t/ZRluRkHXOV2", label: "항공권", external: true },
      { href: "https://www.trip.com/t/ZRluRkHXOV2", label: "호텔", external: true },
      { href: "/travel?cat=맛집", label: "맛집" },
      { href: "/travel?cat=여행꿀팁", label: "여행꿀팁" },
    ],
  },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-blue-400">
          AI Insight Korea
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.sub && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-lg px-3 py-2 transition ${
                  isActive(item.href)
                    ? "text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {item.label}
                {item.sub && (
                  <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.sub && openDropdown === item.href && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="min-w-[160px] rounded-2xl border border-white/10 bg-slate-900/95 py-2 shadow-xl backdrop-blur">
                    {item.sub.map((s) =>
                      s.external ? (
                        <a
                          key={s.href + s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                        >
                          {s.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-900 px-6 pb-6 lg:hidden">
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-white/5 py-3">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-medium ${isActive(item.href) ? "text-blue-400" : "text-slate-200"}`}
              >
                {item.label}
              </Link>
              {item.sub && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.sub.slice(1).map((s) =>
                    s.external ? (
                      <a
                        key={s.href + s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 hover:text-blue-400"
                      >
                        {s.label}
                      </a>
                    ) : (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 hover:text-blue-400"
                      >
                        {s.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
