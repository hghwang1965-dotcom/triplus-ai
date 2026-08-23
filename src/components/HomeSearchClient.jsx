"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import travelData from "@/lib/travelData";

const POPULAR_KEYWORDS = ["파리", "도쿄", "바르셀로나", "세부", "하롱베이", "제주", "방콕", "베네치아"];

const POPULAR_DESTINATIONS = [
  { slug: "tokyo",      label: "도쿄",       country: "JAPAN" },
  { slug: "jeju",       label: "제주",       country: "KOREA" },
  { slug: "bangkok",    label: "방콕",       country: "THAILAND" },
  { slug: "barcelona",  label: "바르셀로나", country: "SPAIN" },
  { slug: "venice",     label: "베네치아",   country: "ITALY" },
  { slug: "cebu",       label: "세부",       country: "PHILIPPINES" },
  { slug: "halong",     label: "하롱베이",   country: "VIETNAM" },
  { slug: "versailles", label: "베르사유",   country: "FRANCE" },
];

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "");
}

function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export default function HomeSearchClient({ posts }) {
  const [inputValue, setInputValue]   = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const resultsRef = useRef(null);

  const kw = searchQuery.toLowerCase();

  const filteredPosts = searchQuery.trim()
    ? posts.filter((post) => {
        const title   = stripHtml(post.title?.rendered || "");
        const excerpt = stripHtml(post.excerpt?.rendered || "");
        return `${title} ${excerpt}`.toLowerCase().includes(kw);
      })
    : [];

  const filteredDestinations = searchQuery.trim()
    ? Object.entries(travelData).filter(([, data]) => {
        const text = `${data.title} ${data.description} ${data.country} ${data.points.map(p => p.content).join(" ")}`.toLowerCase();
        return text.includes(kw);
      }).map(([slug, data]) => ({ slug, ...data }))
    : [];

  const totalCount = filteredPosts.length + filteredDestinations.length;
  const recentPosts = posts.slice(0, 6);

  // 검색 실행 시 결과 영역으로 자동 스크롤
  useEffect(() => {
    if (searchQuery.trim() && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchQuery]);

  const handleSearch = () => {
    const kw = inputValue.trim();
    if (!kw) return;
    setSearchQuery(kw);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleKeyword = (kw) => {
    setInputValue(kw);
    setSearchQuery(kw);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchQuery("");
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <p className="mb-4 text-sm tracking-[0.3em] text-blue-400 uppercase">
          Travel Search Platform
        </p>

        <h1 className="mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          ✈️ AI Insight Korea
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
          어디로 떠나고 싶으신가요?
          <br />
          <span className="text-base text-slate-400">
            도시 · 관광지 · 국가를 검색하면 여행 가이드 · 항공권 · 호텔 · 투어 정보를 한 번에 확인할 수 있습니다
          </span>
        </p>

        {/* 검색창 */}
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur focus-within:border-blue-400/60">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="파리, 도쿄, 루브르 박물관, 신혼여행 유럽..."
              className="w-full bg-transparent px-6 py-5 text-white outline-none placeholder:text-slate-400"
            />
            {inputValue && (
              <button
                onClick={handleClear}
                className="px-3 text-slate-500 transition hover:text-white"
                aria-label="지우기"
              >
                ✕
              </button>
            )}
            <button
              onClick={handleSearch}
              className="bg-blue-500 px-8 font-semibold transition hover:bg-blue-400 active:bg-blue-600"
            >
              검색
            </button>
          </div>

          {/* 인기 키워드 */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {POPULAR_KEYWORDS.map((kw) => (
              <button
                key={kw}
                onClick={() => handleKeyword(kw)}
                className={`rounded-full border px-4 py-1.5 text-sm transition
                  ${searchQuery === kw
                    ? "border-blue-400 text-blue-400"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-blue-400 hover:text-blue-400"
                  }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 검색 결과 ── */}
      <div ref={resultsRef}>
        {searchQuery.trim() && (
          <section className="px-6 py-16">
            <div className="mx-auto max-w-6xl">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">SEARCH RESULTS</p>
                  <h2 className="text-3xl font-bold">
                    "{searchQuery}" 검색 결과
                    <span className="ml-3 text-lg font-normal text-slate-400">
                      {totalCount}건
                    </span>
                  </h2>
                </div>
                <button
                  onClick={handleClear}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  ← 전체 보기
                </button>
              </div>

              {totalCount > 0 ? (
                <>
                  {/* 여행지 가이드 결과 */}
                  {filteredDestinations.length > 0 && (
                    <div className="mb-12">
                      <p className="mb-6 text-sm tracking-widest text-blue-400">여행지 가이드</p>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredDestinations.map((dest) => (
                          <Link key={dest.slug} href={`/travel/${dest.slug}`}>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
                              <p className="mb-1 text-xs tracking-widest text-blue-400">{dest.country}</p>
                              <p className="mb-2 text-lg font-bold">{dest.title}</p>
                              <p className="text-sm leading-6 text-slate-400">{dest.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 블로그 포스팅 결과 */}
                  {filteredPosts.length > 0 && (
                    <div>
                      <p className="mb-6 text-sm tracking-widest text-blue-400">관련 블로그 포스팅</p>
                      <div className="grid gap-6 md:grid-cols-3">
                        {filteredPosts.map((post) => (
                          <PostCard
                            key={post.id}
                            category="여행 가이드"
                            title={stripHtml(post.title?.rendered || "")}
                            description={stripHtml(post.excerpt?.rendered || "").slice(0, 120)}
                            slug={post.slug}
                            image={getFeaturedImage(post)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
                  <p className="text-slate-400">"{searchQuery}"에 대한 검색 결과가 없습니다.</p>
                  <p className="mt-2 text-sm text-slate-500">
                    다른 키워드로 검색하거나 인기 키워드를 눌러보세요.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      {/* ── 인기 여행지 (검색 없을 때) ── */}
      {!searchQuery.trim() && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">POPULAR DESTINATIONS</p>
            <h2 className="mb-10 text-3xl font-bold">인기 여행지</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {POPULAR_DESTINATIONS.map((dest) => (
                <Link key={dest.slug} href={`/travel/${dest.slug}`}>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
                    <p className="mb-2 text-xs tracking-widest text-blue-400">{dest.country}</p>
                    <p className="text-xl font-bold">{dest.label}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-right">
              <Link href="/travel" className="text-sm text-slate-400 transition hover:text-blue-400">
                전체 여행지 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 최신 여행 가이드 (검색 없을 때) ── */}
      {!searchQuery.trim() && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">LATEST GUIDES</p>
            <h2 className="mb-10 text-3xl font-bold">최신 여행 가이드</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {recentPosts.map((post) => (
                <PostCard
                  key={post.id}
                  category="여행 가이드"
                  title={stripHtml(post.title?.rendered || "")}
                  description={stripHtml(post.excerpt?.rendered || "").slice(0, 120)}
                  slug={post.slug}
                  image={getFeaturedImage(post)}
                />
              ))}
            </div>

            <div className="mt-8 text-right">
              <Link href="/blog" className="text-sm text-slate-400 transition hover:text-blue-400">
                전체 글 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
