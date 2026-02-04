const hobbies = [
  { icon: "flight", label: "Solo Travel" },
  { icon: "coffee", label: "Tech Blogs" },
];

export default function BeyondTerminalSection() {
  return (
    <section className="section-container text-center max-w-3xl min-w-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">Beyond the Terminal</h2>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10">
        When I am not crafting pixels, you can find me exploring the vast
        landscapes of India or contributing to open-source projects. I am a firm
        believer in the balance between digital innovation and human connection.
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {hobbies.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="size-14 sm:size-16 rounded-full bg-slate-100 dark:bg-charcoal flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                {icon}
              </span>
            </div>
            <span className="text-sm font-medium text-slate-900 dark:text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
