const EXPERIENCES = [
  {
    id: "yatra",
    icon: "work",
    iconBg: "bg-primary/20 text-primary border-primary/30",
    lineClass: "bg-gradient-to-b from-primary/30 to-slate-300 dark:to-[#324467]",
    title: "Frontend Developer",
    period: "JUN 2022 - PRESENT",
    periodClass: "text-primary",
    company: "Yatra.com | Gurgaon, India",
    bullets: [
      "Optimized Core Web Vitals across major funnels, leading to a 20% improvement in lighthouse scores.",
      "Implemented SEO strategies that boosted organic traffic by 15% through server-side rendering enhancements.",
      "Led the migration of legacy flight booking modules to a modern React/Next.js architecture.",
    ],
    bulletIconClass: "text-primary",
  },
  {
    id: "iot83",
    icon: "history",
    iconBg: "bg-slate-200 dark:bg-[#232f48] text-slate-600 dark:text-[#92a4c9] border-slate-300 dark:border-[#324467]",
    lineClass: "bg-slate-300 dark:bg-[#324467]",
    title: "Frontend Developer Intern",
    period: "JAN 2022 - MAY 2022",
    periodClass: "text-slate-600 dark:text-[#92a4c9]",
    company: "IoT83 | Noida, India",
    bullets: [
      "Architected real-time IoT monitoring dashboards using React.js and D3.js for data visualization.",
      "Developed reusable UI component library following atomic design principles.",
      "Integrated WebSocket connections for live sensor data streaming with low latency.",
    ],
    bulletIconClass: "text-slate-500 dark:text-[#324467]",
  },
];

export default function CareerPathSection() {
  return (
    <div>
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6">
        Career Path
      </h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4">
        {EXPERIENCES.flatMap((exp, index) => [
          <div
            key={`${exp.id}-icon`}
            className="flex flex-col items-center gap-1 pt-1"
          >
            <div
              className={`flex items-center justify-center size-10 rounded-full border ${exp.iconBg}`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {exp.icon}
              </span>
            </div>
            {index < EXPERIENCES.length - 1 ? (
              <div className={`w-[2px] h-full grow my-2 ${exp.lineClass}`} />
            ) : (
              <div className="w-[2px] h-12 my-2 bg-transparent" />
            )}
          </div>,
          <div
            key={`${exp.id}-content`}
            className="flex flex-1 flex-col pb-12 pt-1"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <p className="text-slate-900 dark:text-white text-xl font-bold leading-normal">
                {exp.title}
              </p>
              <p
                className={`text-sm font-semibold tracking-wider ${exp.periodClass}`}
              >
                {exp.period}
              </p>
            </div>
            <p className="text-slate-600 dark:text-[#92a4c9] text-base font-medium mb-4">
              {exp.company}
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed list-none">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className={`mt-0.5 material-symbols-outlined text-sm ${exp.bulletIconClass}`}
                  >
                    check_circle
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>,
        ])}
      </div>
    </div>
  );
}
