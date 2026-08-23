import TravelCard from "@/components/TravelCard";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Travel | AI Insight Korea",
  description: "AI가 추천하는 여행지, 항공권, 호텔, 투어 정보를 확인하세요.",
};

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "");
}
function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export default async function TravelPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          TRAVEL
        </p>

        <h1 className="mb-6 text-5xl font-bold">AI 여행 추천</h1>

        <p className="mb-16 max-w-2xl text-lg leading-8 text-slate-300">
          도시별 여행 정보, 일정 추천, 항공권·호텔·투어 콘텐츠를 제공합니다.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TravelCard
            country="JAPAN"
            title="도쿄 여행"
            description="맛집, 쇼핑, 감성 카페 중심의 도쿄 자유여행 추천 콘텐츠"
            slug="tokyo"
          />

          <TravelCard
            country="KOREA"
            title="제주 여행"
            description="오션뷰, 드라이브 코스, 감성 숙소 중심 제주 여행"
            slug="jeju"
          />

          <TravelCard
            country="THAILAND"
            title="방콕 여행"
            description="가성비 호텔과 야시장 중심의 방콕 여행 추천"
            slug="bangkok"
          />

          <TravelCard
            country="SPAIN"
            title="바르셀로나 여행"
            description="가우디 건축, 지중해 해변, 맛집 투어 중심의 스페인 대표 여행지"
            slug="barcelona"
          />

          <TravelCard
            country="POLAND"
            title="바르샤바 여행"
            description="역사 구시가지, 현대 문화, 동유럽 감성이 공존하는 폴란드 수도"
            slug="warsaw"
          />

          <TravelCard
            country="POLAND"
            title="그단스크 여행"
            description="발트해 항구 도시, 중세 구시가지, 호박 공예 중심의 폴란드 해안 여행"
            slug="gdansk"
          />

          <TravelCard
            country="FRANCE"
            title="베르사유 궁전"
            description="루이 14세의 화려한 바로크 궁전과 정원, 파리 근교 필수 명소"
            slug="versailles"
          />

          <TravelCard
            country="FRANCE"
            title="루브르 박물관"
            description="모나리자, 밀로의 비너스 등 세계 최대 미술관 파리 핵심 여행지"
            slug="louvre"
          />

          <TravelCard
            country="ITALY"
            title="베네치아 여행"
            description="수상 도시, 곤돌라, 산 마르코 광장 중심의 이탈리아 낭만 여행지"
            slug="venice"
          />

          <TravelCard
            country="GERMANY"
            title="하이델베르크 여행"
            description="고성과 네카어 강변, 유럽 최고의 낭만주의 대학 도시 여행"
            slug="heidelberg"
          />

          <TravelCard
            country="VIETNAM"
            title="하롱베이 여행"
            description="석회암 기암절벽과 에메랄드 바다, 크루즈 투어 중심의 베트남 대표 절경"
            slug="halong"
          />

          <TravelCard
            country="PHILIPPINES"
            title="따가이따이 여행"
            description="따알 화산 호수, 선선한 고원 기후, 마닐라 근교 힐링 여행지"
            slug="tagaytay"
          />

          <TravelCard
            country="PHILIPPINES"
            title="세부 여행"
            description="스노클링, 고래상어 투어, 흰 모래 해변 중심의 필리핀 대표 휴양지"
            slug="cebu"
          />
        </div>

        {/* 여행 블로그 글 */}
        {posts.length > 0 && (
          <div className="mt-24">
            <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">TRAVEL BLOG</p>
            <h2 className="mb-12 text-3xl font-bold">여행 블로그</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  category="Travel"
                  title={stripHtml(post.title?.rendered || "")}
                  description={stripHtml(post.excerpt?.rendered || "").slice(0, 120)}
                  slug={post.slug}
                  image={getFeaturedImage(post)}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
