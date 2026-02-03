import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-16 bg-white dark:bg-[#080d1a] border-t border-slate-200 dark:border-white/5">
      <div className="layout-content-container flex flex-col md:flex-row justify-between w-full max-w-[1200px] px-10 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Logo className="size-6 text-primary" />
            <span className="font-bold text-slate-900 dark:text-white text-xl">
              Aniket Singh
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
            Crafting premium digital experiences through high-performance
            frontend engineering and thoughtful design.
          </p>
          <div className="flex gap-4">
            <a
              className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-xl">link</span>
            </a>
            <a
              className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
              aria-label="Email"
            >
              <span className="material-symbols-outlined text-xl">
                alternate_email
              </span>
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
              Navigation
            </p>
            <Link
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="/"
            >
              About
            </Link>
            <Link
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="/experience"
            >
              Experience
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
              Connect
            </p>
            <a
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-10 mt-20 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-400 dark:text-slate-500">
          © 2024 Aniket Singh. All rights reserved.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Built with React, Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
