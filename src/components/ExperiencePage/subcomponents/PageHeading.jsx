import Link from "next/link";

export default function PageHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 p-2 sm:p-4">
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
        <h1 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
          Professional Experience
        </h1>
        <p className="text-slate-600 dark:text-[#92a4c9] text-sm sm:text-base md:text-lg font-normal leading-normal max-w-2xl">
          A journey through my career as a Frontend Developer, focusing on
          high-performance web applications and scalable UI architecture.
        </p>
      </div>
      <Link
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download={"Aniket-Resume.pdf"}
        className="flex w-full sm:w-auto min-w-0 sm:min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-11 sm:h-12 px-4 sm:px-6 bg-slate-200 dark:bg-[#232f48] hover:bg-slate-300 dark:hover:bg-[#2d3b5a] transition-colors text-slate-900 dark:text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
      >
        <span className="material-symbols-outlined">download</span>
        <span className="truncate">Download Resume</span>
      </Link>
    </div>
  );
}
