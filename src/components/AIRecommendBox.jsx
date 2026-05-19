"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AIRecommendBox() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  const recommendMap = {
    서울: "/travel/seoul",
    제주: "/travel/jeju",
    도쿄: "/travel/tokyo",
    방콕: "/travel/bangkok",
  };

  const handleRecommend = () => {
    const keyword = query.trim();

    for (const key in recommendMap) {
      if (keyword.includes(key)) {
        router.push(recommendMap[key]);
        return;
      }
    }

    alert("추천 결과를 찾을 수 없습니다.");
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <input
          type="text"
          placeholder="예: 서울 여행"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent px-6 py-5 text-white outline-none placeholder:text-slate-400"
        />

        <button
          onClick={handleRecommend}
          className="bg-blue-500 px-8 font-semibold transition hover:bg-blue-400"
        >
          추천
        </button>
      </div>
    </div>
  );
}
