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
  return (
    <div className="w-full flex justify-center py-5 border-b border-solid border-slate-200 dark:border-white/10 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
      <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-4 md:px-10">
        <header className="flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-4">
            <Logo />
            <Link href="/">
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Aniket Singh
              </h2>
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-8">
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
              href="/contact"
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Download Resume</span>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
