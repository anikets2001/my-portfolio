import Image from "next/image";

const TAG_CLASS =
  "text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-[#232f48] text-slate-700 dark:text-[#92a4c9]";

export default function ProjectCard({
  title,
  badge,
  description,
  tags = [],
  imageSrc,
  imageAlt,
  caseStudyHref = "#",
  liveDemoHref = "#",
}) {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#1a2335]/50 group">
      <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-slate-200 dark:bg-[#232f48]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={338}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-5xl">
            visibility
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <p className="text-slate-900 dark:text-white text-xl font-bold">
            {title}
          </p>
          <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
            {badge}
          </span>
        </div>
        <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className={TAG_CLASS}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-[#232f48]">
        <a
          href={caseStudyHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg h-11 bg-primary text-white text-sm font-bold transition-all hover:brightness-110"
        >
          <span className="material-symbols-outlined text-sm">article</span>
          <span className="truncate">Case Study</span>
        </a>
        <a
          href={liveDemoHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg h-11 bg-slate-100 dark:bg-[#232f48] text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-200 dark:hover:bg-[#2d3a5a]"
        >
          <span className="material-symbols-outlined text-sm">rocket_launch</span>
          <span className="truncate">Live Demo</span>
        </a>
      </div>
    </div>
  );
}
