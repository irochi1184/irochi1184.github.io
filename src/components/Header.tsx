"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const navItems = [
  { href: "#services", label: "研修メニュー" },
  { href: "#skills", label: "スキル" },
  { href: "#works", label: "実績" },
  { href: "#contact", label: "お問い合わせ" },
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
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a
          href="#top"
          className={`font-bold tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          {site.name}
        </a>
        <nav
          className={`hidden items-center gap-7 text-sm font-medium md:flex ${
            scrolled ? "text-muted" : "text-slate-300"
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
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-500"
        >
          ご相談
        </a>
      </div>
    </header>
  );
}
