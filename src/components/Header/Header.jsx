"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ currentPath = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 sm:py-5 border-b border-solid border-slate-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-4 md:px-10">
        <header className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Logo />
            <Link href="/" className="min-w-0">
              <h2 className="text-slate-900 dark:text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] truncate">
                Aniket Singh
              </h2>
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-9">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium hover:text-primary transition-colors pb-1 border-b-2 ${
                    currentPath === href
                      ? "text-primary font-bold border-primary"
                      : "text-slate-700 dark:text-white border-transparent"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={"Aniket-Resume.pdf"}
              className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Download Resume</span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden flex items-center justify-center size-10 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors aria-expanded={menuOpen}"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </header>
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            menuOpen ? "max-h-[320px]" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-4 pb-2 border-t border-slate-200 dark:border-white/10 mt-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPath === href
                    ? "text-primary font-bold bg-primary/10"
                    : "text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={"Aniket-Resume.pdf"}
              onClick={() => setMenuOpen(false)}
              className="sm:hidden flex items-center justify-center gap-2 py-3 px-4 mt-2 rounded-lg bg-primary text-white text-sm font-bold"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Download Resume
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
