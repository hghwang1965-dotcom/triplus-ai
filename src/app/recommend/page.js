import RecommendClient from "@/components/RecommendClient";

export const metadata = {
  title: "AI Recommend | AI Insight Korea",
  description: "AI에게 원하는 여행 스타일을 입력하고 맞춤 여행 추천을 받아보세요.",
};

export default function RecommendPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          AI RECOMMEND
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          AI 여행 추천 받기
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          원하는 여행 스타일을 입력하면 AI가 여행지, 일정, 호텔, 투어 콘텐츠를 추천합니다.
        </p>

        <RecommendClient />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm text-blue-400">STEP 01</p>
            <h3 className="mb-3 text-2xl font-bold">여행 입력</h3>
            <p className="leading-7 text-slate-300">
              목적지, 기간, 예산, 취향을 자유롭게 입력합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm text-blue-400">STEP 02</p>
            <h3 className="mb-3 text-2xl font-bold">AI 분석</h3>
            <p className="leading-7 text-slate-300">
              입력 내용을 기반으로 여행 스타일과 추천 조건을 분석합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="mb-3 text-sm text-blue-400">STEP 03</p>
            <h3 className="mb-3 text-2xl font-bold">맞춤 추천</h3>
            <p className="leading-7 text-slate-300">
              항공권, 호텔, 투어, 여행 콘텐츠를 맞춤형으로 추천합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
