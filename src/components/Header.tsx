"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowIcon } from "./Icons";

const links = [
  ["#about", "私について"], ["#services", "できること"],
  ["#works", "つくったもの"], ["#experience", "これまで"], ["#next", "これから"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="wordmark" aria-label={`${site.name} トップへ`} onClick={() => setOpen(false)}>
          <span className="brand-symbol" aria-hidden="true">a<span>.</span></span>
          <span>{site.nameEn}<small>TEACH / BUILD / APPLY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="header-contact">活動を見る <ArrowIcon aria-hidden="true" /></a>
          <button type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "メニューを閉じる" : "メニューを開く"} onClick={() => setOpen(!open)}>
            <span>{open ? "CLOSE" : "MENU"}</span><span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="モバイルナビゲーション" hidden={!open}>
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowIcon aria-hidden="true" /></a>)}
      </nav>
    </header>
  );
}
