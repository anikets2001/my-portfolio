import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-10 sm:py-12 md:py-16 bg-white dark:bg-[#080d1a] border-t border-slate-200 dark:border-white/5 overflow-x-hidden">
      <div className="layout-content-container flex flex-col lg:flex-row lg:items-start justify-between w-full max-w-[1200px] px-4 sm:px-6 md:px-10 gap-10 sm:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 min-w-0 flex-1 lg:flex-initial lg:max-w-md">
          <div className="flex items-center gap-3">
            <Logo className="size-6 text-primary shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl">
              Aniket Singh
            </span>
            <Link
              className="size-9 sm:size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all shrink-0"
              href="https://www.linkedin.com/in/aniket-singh2001/"
              aria-label="linkedin"
              target="_blank"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">link</span>
            </Link>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm sm:text-base leading-relaxed">
            Crafting premium digital experiences through high-performance
            frontend engineering and thoughtful design.
          </p>
        </div>
        <div className="flex flex-row gap-12 sm:gap-16 lg:gap-20 shrink-0">
          <div className="flex flex-col gap-3 sm:gap-4 min-w-[7rem]">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-0">
              Navigation
            </p>
            <nav className="flex flex-col gap-2 sm:gap-3" aria-label="Footer navigation">
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="/"
              >
                About
              </Link>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="/experience"
              >
                Experience
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 min-w-[7rem]">
            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-0">
              Connect
            </p>
            <nav className="flex flex-col gap-2 sm:gap-3" aria-label="Connect links">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="https://www.linkedin.com/in/aniket-singh2001/"
              >
                LinkedIn
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="https://github.com/anikets2001"
              >
                Github
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors w-fit py-0.5"
                href="https://medium.com/@aniketchaudhary_14845"
              >
                Medium
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-[1200px] px-10 mt-20 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © 2024 Aniket Singh. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Built with React, Next.js & Tailwind CSS
        </p>
      </div> */}
    </footer>
  );
}
