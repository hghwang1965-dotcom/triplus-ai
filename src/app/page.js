import AffiliateBanner from "@/components/AffiliateBanner";
import RecommendBox from "@/components/RecommendBox";
import PostCard from "@/components/PostCard";
import AIRecommendBox from "@/components/AIRecommendBox";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />
        </div>
        
        <p className="mb-4 text-sm tracking-[0.3em] text-blue-400 uppercase">
          AI-Powered Travel Platform
        </p>

        <h1 className="mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          ✈️ Amplus AI
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
          AI가 추천하는 스마트 여행 플랫폼
          <br />
          항공권 · 호텔 · 투어 · 여행 콘텐츠를 AI로 탐색하세요
        </p>

        <AIRecommendBox />

        <div className="flex gap-4">
          <button className="rounded-xl bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-400">
            AI 여행 추천 시작
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-400">
            여행 콘텐츠 보기
          </button>
        </div>
      </section>

      <AffiliateBanner />

      <RecommendBox />

      <section className="px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
            TRAVEL CONTENTS
          </p>

          <h2 className="mb-10 text-3xl font-bold">추천 여행 콘텐츠</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <PostCard
              category="JAPAN"
              title="도쿄 자유여행 가이드"
              description="맛집, 쇼핑, 감성 카페 중심의 도쿄 여행 추천 콘텐츠입니다."
              image="/images/tokyo.jpg"
            />

            <PostCard
              category="KOREA"
              title="제주 감성 여행"
              description="오션뷰 숙소와 드라이브 코스를 중심으로 제주 여행을 추천합니다."
              image="/images/jeju.jpg"
            />

            <PostCard
              category="THAILAND"
              title="방콕 가성비 여행"
              description="야시장, 호텔, 투어를 중심으로 방콕 여행 코스를 소개합니다."
              image="/images/bangkok.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}