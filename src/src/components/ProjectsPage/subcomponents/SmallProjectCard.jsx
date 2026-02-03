export default function SmallProjectCard({
  icon = "code",
  title,
  description,
  githubHref = "#",
}) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#1a2335]/30">
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
        <a
          className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <span className="material-symbols-outlined text-xs">open_in_new</span>
        </a>
      </div>
    </div>
  );
}
