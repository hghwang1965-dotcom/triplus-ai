import { getPosts } from "@/lib/wordpress";
import BlogSearchClient from "@/components/BlogSearchClient";

export const metadata = {
  title: "Blog | AI Insight Korea",
  description: "AI 여행, 스마트 여행, 추천 여행 콘텐츠",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          BLOG
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          여행 콘텐츠
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          여행 정보, 추천 코스, AI 기반 여행 인사이트를 제공합니다.
        </p>

        <div className="mt-16">
          <BlogSearchClient posts={posts} />
        </div>
      </section>
    </main>
  );
}
