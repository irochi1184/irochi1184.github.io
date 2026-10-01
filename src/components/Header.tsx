"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const navItems = [
  { href: "#about", label: "プロフィール" },
  { href: "#services", label: "できること" },
  { href: "#works", label: "開発実績" },
  { href: "#experience", label: "経験" },
  { href: "#skills", label: "技術" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className={`font-bold tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <nav
          className={`hidden items-center gap-6 text-sm font-medium lg:flex ${
            scrolled ? "text-muted" : "text-teal-50/70"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-teal-500"
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
