export default function CorePhilosophySection() {
  return (
    <section className="section-container">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 sm:mb-14 md:mb-16 text-slate-900 dark:text-white">
        Core Philosophy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border-t-4 border-t-primary text-center min-w-0">
          <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-4 sm:mb-6">
            bolt
          </span>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">Performance</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            I treat speed as a feature. Optimized bundle sizes and efficient
            rendering are the foundations of every project I touch.
          </p>
        </div>
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border-t-4 border-t-accent-teal text-center min-w-0">
          <span className="material-symbols-outlined text-3xl sm:text-4xl text-accent-teal mb-4 sm:mb-6">
            search
          </span>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">SEO-first Approach</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Visibility matters. I build with semantic HTML and server-side
            rendering to ensure maximum discoverability.
          </p>
        </div>
        <div className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl border-t-4 border-t-indigo-500 text-center min-w-0">
          <span className="material-symbols-outlined text-3xl sm:text-4xl text-indigo-500 mb-4 sm:mb-6">
            layers
          </span>
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">Scalable Architecture</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Clean, modular code that scales. I prefer design systems and
            reusable components that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}
