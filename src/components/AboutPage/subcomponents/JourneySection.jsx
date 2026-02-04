import SectionContainer from "@/components/SectionContainer/SectionContainer";

export default function JourneySection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-charcoal/50 py-12 sm:py-16 md:py-20">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-l-4 border-primary pl-4 sm:pl-6 text-slate-900 dark:text-white">
              The Journey
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                My journey in the tech world began with a deep curiosity for how
                users interact with the web. From my early days at{" "}
                <span className="font-bold text-primary">IoT83</span>, where I
                built industrial-grade monitoring platforms, to my current role
                at <span className="font-bold text-primary">Yatra.com</span>, I
                have always prioritized the intersection of speed and aesthetics.
              </p>
              <p>
                At Yatra, I lead the optimization of travel landing pages, where
                every millisecond counts. My focus on{" "}
                <span className="underline decoration-accent-teal decoration-2 underline-offset-4">
                  SEO-first frontend architecture
                </span>{" "}
                and SSR strategies has directly impacted user acquisition and
                core web vitals.
              </p>
              <p>
                I believe frontend engineering is not just about making things
                look good—it is about building scalable, accessible, and
                high-performance systems that empower users.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="text-sm uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Education
              </h3>
              <div className="flex gap-4">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    school
                  </span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400">GLA University</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    2019 — 2023
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[14px] mt-1 text-accent-teal">
                        check_circle
                      </span>
                      Specialized in Computer Science and Engineering.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[14px] mt-1 text-accent-teal">
                        check_circle
                      </span>
                      Passionate to learn new skills and apply them in real life.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
