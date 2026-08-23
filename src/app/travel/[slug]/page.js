import travelData from "@/lib/travelData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = travelData[slug];

  return {
    title: data ? `${data.title} | AI Insight Korea` : "Travel | AI Insight Korea",
    description: data?.description || "AI 기반 여행 추천 콘텐츠입니다.",
  };
}

export default async function TravelDetailPage({ params }) {
  const { slug } = await params;
  const data = travelData[slug];

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold">여행 정보를 찾을 수 없습니다.</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          {data.country}
        </p>

        <h1 className="mb-6 text-5xl font-bold">{data.title}</h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          {data.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <img
            src={data.image}
            alt={data.title}
            className="h-[360px] w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.points.map((point) => (
            <div
              key={point.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="mb-3 text-sm tracking-[0.2em] text-blue-400">
                {point.label}
              </h2>
              <p className="leading-8 text-slate-300">{point.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.trip.com/t/i9ciUFxglU2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
          >
            호텔 예약하기
          </a>

          <a
            href="https://affiliate.klook.com/redirect?aid=120107&aff_adid=1280570&k_site=https%3A%2F%2Fwww.klook.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-400"
          >
            투어 보기
          </a>

          <a
            href="https://www.trip.com/t/i9ciUFxglU2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-400"
          >
            항공권 비교
          </a>
        </div>
      </section>
    </main>
  );
}
