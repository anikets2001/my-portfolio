export default function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between gap-3 mb-4 sm:mb-6">
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-3">
        <p className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Featured Projects
        </p>
        <p className="text-slate-500 dark:text-[#92a4c9] text-sm sm:text-base font-normal leading-normal">
          A detailed look at my contributions at Yatra.com, IoT83, and personal
          development ventures.
        </p>
      </div>
    </div>
  );
}
