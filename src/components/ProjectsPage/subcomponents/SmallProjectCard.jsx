import Link from "next/link";

export default function SmallProjectCard({
  icon = "code",
  title,
  description,
  githubHref = "#",
  liveUrl,
}) {
  return (
    <div className="p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#1a2335]/30 min-w-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <p className="font-bold text-lg text-slate-900 dark:text-white">
          {title}
        </p>
      </div>
      <p className="text-sm text-slate-500 dark:text-[#92a4c9] mb-4">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <Link
          className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github{" "}
          <span className="material-symbols-outlined text-xs">open_in_new</span>
        </Link>
        {liveUrl && (
          <Link
            target="_blank"
            href={liveUrl}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg h-11 bg-slate-100 dark:bg-[#232f48] text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-200 dark:hover:bg-[#2d3a5a]"
          >
            <span className="material-symbols-outlined text-sm">
              rocket_launch
            </span>
            <span className="truncate">Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}
