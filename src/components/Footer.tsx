import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-10 text-center">
        <p className="text-lg font-bold text-white">{site.name}</p>
        <p className="text-sm text-slate-400">{site.role}</p>
        <p className="mt-2 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
