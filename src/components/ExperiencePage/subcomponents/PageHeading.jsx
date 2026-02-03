export default function PageHeading() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 p-4">
      <div className="flex min-w-72 flex-col gap-3">
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          Professional Experience
        </h1>
        <p className="text-slate-600 dark:text-[#92a4c9] text-lg font-normal leading-normal max-w-2xl">
          A journey through my career as a Frontend Developer, focusing on
          high-performance web applications and scalable UI architecture.
        </p>
      </div>
      <button
        type="button"
        className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-slate-200 dark:bg-[#232f48] hover:bg-slate-300 dark:hover:bg-[#2d3b5a] transition-colors text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em]"
      >
        <span className="material-symbols-outlined">download</span>
        <span className="truncate">Download Full Resume</span>
      </button>
    </div>
  );
}
