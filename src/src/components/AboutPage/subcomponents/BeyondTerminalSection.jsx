const hobbies = [
  { icon: "flight", label: "Solo Travel" },
  { icon: "terminal", label: "Open Source" },
  { icon: "coffee", label: "Tech Blogs" },
];

export default function BeyondTerminalSection() {
  return (
    <section className="section-container text-center max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Beyond the Terminal</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
        When I am not crafting pixels, you can find me exploring the vast
        landscapes of India or contributing to open-source projects. I am a firm
        believer in the balance between digital innovation and human connection.
      </p>
      <div className="flex justify-center gap-8">
        {hobbies.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="size-16 rounded-full bg-slate-100 dark:bg-charcoal flex items-center justify-center">
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
