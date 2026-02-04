import Image from "next/image";
import { PROFILE_IMAGE } from "../config";

export default function HeroSection() {
  return (
    <section className="section-container flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 pt-20 sm:pt-24 md:pt-28">
      <div className="flex-1 text-center md:text-left min-w-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-4 sm:mb-6">
          Driven by <span className="text-primary">Code</span>, Focused on{" "}
          <span className="text-accent-teal">User Experience</span>.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0">
          Frontend Developer at Yatra.com, turning complex problems into
          seamless digital experiences through performance-driven engineering.
        </p>
      </div>
      <div className="relative shrink-0">
        <div className="size-48 sm:size-56 md:size-64 lg:size-80 rounded-full overflow-hidden border-4 border-primary/20 p-2">
          <Image
            alt="Aniket Singh"
            className="w-full h-full object-cover rounded-full shadow-2xl"
            src={PROFILE_IMAGE}
            width={320}
            height={320}
            priority
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:left-12 bg-white dark:bg-charcoal p-3 sm:p-4 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 glass-card whitespace-nowrap">
          <p className="text-xs sm:text-sm font-bold text-primary text-center">Aniket Singh</p>
        </div>
      </div>
    </section>
  );
}
