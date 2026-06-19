"use client";

import { motion } from "motion/react";
import { site, stats, marquee } from "@/data/site";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* 背景：にじむ光の blob */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-20 -top-24 h-80 w-80 rounded-full bg-blue-600/40 blur-3xl" />
        <div className="animate-blob absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl [animation-delay:-4s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl [animation-delay:-8s]" />
      </div>
      {/* 背景：ドットグリッド */}
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr]">
        {/* 左：テキスト */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-200 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            個人事業主 / 新人研修講師
          </motion.span>

          <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-6xl">
            {site.tagline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {i === 1 ? <span className="text-gradient">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-300"
          >
            {site.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 hover:shadow-xl"
            >
              研修のご相談
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              研修メニュー
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xl font-black sm:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-slate-400">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 右：浮遊するコードウィンドウ（ビジュアル要素） */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <CodeCard />
          {/* 飾りの幾何学シェイプ */}
          <div className="animate-float absolute -right-6 -top-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 opacity-80 shadow-xl [animation-delay:-2s]" />
          <div className="animate-float absolute -bottom-5 -left-5 h-12 w-12 rounded-full border-2 border-sky-300/60" />
        </motion.div>
      </div>

      {/* キーワードのマーキー */}
      <div className="relative border-t border-white/10 py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-semibold text-slate-500">
          {[...marquee, ...marquee].map((k, i) => (
            <span key={i} className="flex items-center gap-10">
              {k}
              <span className="text-blue-500/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// 装飾用の擬似コードウィンドウ
function CodeCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-xs text-slate-500">Training.java</span>
      </div>
      <pre className="overflow-hidden p-5 text-[13px] leading-6">
        <code>
          <span className="text-pink-400">class</span>{" "}
          <span className="text-sky-300">Newcomer</span> {"{"}
          {"\n"} <span className="text-pink-400">void</span>{" "}
          <span className="text-emerald-300">grow</span>() {"{"}
          {"\n"} <span className="text-slate-500">{"// 基礎から、現場で戦力に"}</span>
          {"\n"} learn(<span className="text-amber-300">&quot;Java&quot;</span>);
          {"\n"} build(<span className="text-amber-300">&quot;WebApp&quot;</span>);
          {"\n"} deploy(<span className="text-amber-300">&quot;AWS&quot;</span>);
          {"\n"} <span className="text-pink-400">return</span>{" "}
          <span className="text-sky-300">Engineer</span>;
          {"\n"} {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
