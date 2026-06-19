import { site } from "@/data/site";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "研修メニュー" },
  { href: "#skills", label: "スキル" },
  { href: "#works", label: "実績" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="font-bold tracking-tight text-ink">
          {site.name}
          <span className="ml-2 hidden text-xs font-medium text-muted sm:inline">
            {site.role}
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
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
          className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
        >
          ご相談
        </a>
      </div>
    </header>
  );
}
