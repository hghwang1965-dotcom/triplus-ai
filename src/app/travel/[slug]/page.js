const travelData = {
  seoul: {
    country: "KOREA",
    title: "서울 여행 가이드",
    description: "한류, 미식, 쇼핑, 야경까지 즐길 수 있는 서울 자유여행 추천 콘텐츠입니다.",
    image: "/images/seoul.jpg",
    points: [
      { label: "추천 지역", content: "명동, 홍대, 강남, 북촌한옥마을" },
      { label: "추천 맛집", content: "삼겹살, 떡볶이, 치킨, 한강 야식" },
      { label: "추천 숙소", content: "명동 비즈니스호텔, 강남 서비스드 레지던스, 1박 12만원대" },
      { label: "추천 일정", content: "1일차 명동·광화문 / 2일차 홍대·연남동 / 3일차 강남·한강" },
    ],
  },
  tokyo: {
    country: "JAPAN",
    title: "도쿄 여행 가이드",
    description: "맛집, 쇼핑, 감성 카페 중심의 도쿄 자유여행 추천 콘텐츠입니다.",
    image: "/images/tokyo.jpg",
    points: [
      { label: "추천 지역", content: "신주쿠, 시부야, 하라주쿠, 이케부쿠로" },
      { label: "추천 맛집", content: "라멘, 스시, 야키토리, 편의점 간식" },
      { label: "추천 숙소", content: "신주쿠 역세권 비즈니스호텔, 1박 10만원대" },
      { label: "추천 일정", content: "1일차 시부야 / 2일차 아사쿠사 / 3일차 하라주쿠" },
    ],
  },
  jeju: {
    country: "KOREA",
    title: "제주 여행 가이드",
    description: "오션뷰 숙소, 드라이브 코스, 감성 카페 중심의 제주 여행 콘텐츠입니다.",
    image: "/images/jeju.jpg",
    points: [
      { label: "추천 지역", content: "성산일출봉, 협재해변, 우도, 한라산" },
      { label: "추천 맛집", content: "흑돼지, 전복죽, 갈치조림, 감귤 디저트" },
      { label: "추천 숙소", content: "오션뷰 풀빌라, 감성 게스트하우스, 1박 15만원대" },
      { label: "추천 일정", content: "1일차 동부(성산) / 2일차 서부(협재) / 3일차 한라산" },
    ],
  },
  bangkok: {
    country: "THAILAND",
    title: "방콕 여행 가이드",
    description: "가성비 호텔, 야시장, 투어 중심의 방콕 자유여행 추천 콘텐츠입니다.",
    image: "/images/bangkok.jpg",
    points: [
      { label: "추천 지역", content: "카오산로드, 짜뚜짝 시장, 시암, 차이나타운" },
      { label: "추천 맛집", content: "팟타이, 똠양꿍, 망고찹쌀밥, 야시장 꼬치" },
      { label: "추천 숙소", content: "수영장 포함 리조트, 역세권 호텔, 1박 8만원대" },
      { label: "추천 일정", content: "1일차 왕궁·사원 / 2일차 야시장 / 3일차 쇼핑몰" },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = travelData[slug];

  return {
    title: data ? `${data.title} | Amplus AI` : "Travel | Amplus AI",
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
