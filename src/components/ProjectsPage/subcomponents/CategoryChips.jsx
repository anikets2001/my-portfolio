"use client";

import { useState } from "react";

const categories = [
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "seo", label: "SEO" },
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "mui", label: "MUI" },
];

export default function CategoryChips() {
  const [activeId, setActiveId] = useState("all");

  return (
    <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => setActiveId(id)}
          className={`flex h-9 sm:h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 sm:px-6 cursor-pointer transition-colors bg-slate-200 dark:bg-[#232f48] hover:bg-slate-300 dark:hover:bg-slate-700`}
        >
          <p
            className={`text-xs sm:text-sm font-medium ${
              activeId === id
                ? "text-white font-bold"
                : "text-slate-700 dark:text-white"
            }`}
          >
            {label}
          </p>
        </button>
      ))}
    </div>
  );
}
