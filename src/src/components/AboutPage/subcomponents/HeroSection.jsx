import Image from "next/image";
import { PROFILE_IMAGE } from "../config";

export default function HeroSection() {
  return (
    <section className="section-container flex flex-col-reverse md:flex-row items-center gap-12 pt-28">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-6">
          Driven by <span className="text-primary">Code</span>, Focused on{" "}
          <span className="text-accent-teal">User Experience</span>.
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          Frontend Developer at Yatra.com, turning complex problems into
          seamless digital experiences through performance-driven engineering.
        </p>
      </div>
      <div className="relative">
        <div className="size-64 md:size-80 rounded-full overflow-hidden border-4 border-primary/20 p-2">
          <Image
            alt="Aniket Singh"
            className="w-full h-full object-cover rounded-full shadow-2xl"
            src={PROFILE_IMAGE}
            width={320}
            height={320}
            priority
          />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-charcoal p-4 rounded-xl shadow-xl border border-slate-200 dark:border-white/10 glass-card">
          <p className="text-sm font-bold text-primary">3+ Years Experience</p>
        </div>
      </div>
    </section>
  );
}
