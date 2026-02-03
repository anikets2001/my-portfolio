import SectionContainer from "@/components/SectionContainer/SectionContainer";

const dailyDrivers = ["React", "Next.js", "JavaScript (ES6+)", "TypeScript"];
const toolsOfTrade = [
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Git & GitHub",
  "Node.js",
  "Unit Testing",
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-slate-200 dark:bg-slate-900 py-24 text-slate-900 dark:text-white">
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black mb-6">Tech Stack Overview</h2>
            <p className="text-slate-600 dark:text-slate-400">
              A curated collection of tools I use to bring ideas to life.
              Categorized by frequency and mastery.
            </p>
          </div>
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-accent-teal font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-accent-teal" /> Daily Drivers
              </h3>
              <div className="flex flex-wrap gap-4">
                {dailyDrivers.map((tech) => (
                  <div
                    key={tech}
                    className="px-6 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-3"
                  >
                    <span className="font-bold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                <span className="h-px w-8 bg-primary" /> Tools of the Trade
              </h3>
              <div className="flex flex-wrap gap-4">
                {toolsOfTrade.map((tech) => (
                  <div
                    key={tech}
                    className="px-5 py-2 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-300/50 dark:border-white/5 text-slate-600 dark:text-slate-300 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
