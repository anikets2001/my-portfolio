const IMPACT_CARDS = [
  {
    id: "performance",
    icon: "analytics",
    gradient: "from-primary/40 to-slate-100 dark:to-background-dark",
    title: "Performance Engineering",
    description:
      "Reduced page load time by 40% for the Yatra search results page through advanced code splitting and lazy loading.",
  },
  {
    id: "iot-dashboard",
    icon: "speed",
    gradient: "from-blue-500/20 to-indigo-200 dark:to-indigo-900/40",
    title: "IoT Real-time Dashboard",
    description:
      "Built a complex dashboard managing 10k+ device nodes with sub-second updates using React and high-performance charts.",
  },
];

export default function KeyImpactSection() {
  return (
    <div>
      <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Key Impact & Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {IMPACT_CARDS.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-4 p-4 rounded-xl bg-slate-100 dark:bg-[#1a2333] border border-slate-200 dark:border-[#232f48] hover:border-primary/50 transition-all group"
          >
            <div className="w-full bg-primary/10 aspect-video rounded-lg overflow-hidden">
              <div
                className={`w-full h-full bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
                data-alt={card.title}
              >
                <span className="material-symbols-outlined text-5xl text-primary/60">
                  {card.icon}
                </span>
              </div>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">
                {card.title}
              </p>
              <p className="text-slate-600 dark:text-[#92a4c9] text-sm font-normal leading-normal mt-1">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
