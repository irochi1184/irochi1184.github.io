"use client";

import { motion } from "motion/react";
import { site, stats, marquee } from "@/data/site";
import { ArrowIcon } from "./Icons";

const currentWork = [
  "企業向けの新人・IT研修",
  "Java / Web開発 / クラウド",
  "生成AIの基礎・業務活用",
  "SwiftUIでのiOSアプリ開発",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-200/15 bg-white/5 px-4 py-2 text-xs font-semibold text-teal-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            IT研修講師 / エンジニア / iOSアプリ開発
          </motion.span>

          <h1 className="mt-7 text-4xl font-black leading-[1.18] tracking-tight sm:text-6xl">
            {site.tagline.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`block ${index === 1 ? "text-gradient" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-7 max-w-xl text-[15px] leading-8 text-teal-50/70 sm:text-base"
          >
            {site.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all hover:bg-teal-500"
            >
              開発実績を見る
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              できることを見る
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.68 }}
            className="mt-12 grid max-w-2xl gap-5 border-t border-white/10 pt-7 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-black text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-teal-50/55">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8"
        >
          <p className="text-xs font-bold tracking-[0.22em] text-teal-200">CURRENT WORK</p>
          <h2 className="mt-3 text-xl font-bold">現在取り組んでいること</h2>
          <div className="mt-6 space-y-3">
            {currentWork.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-3.5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-400/15 text-teal-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                </span>
                <span className="text-sm font-medium text-teal-50/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-teal-50/50">
            研修で教える内容だけでなく、自分でも開発・公開まで行いながら技術を更新しています。
          </p>
        </motion.aside>
      </div>

      <div className="relative border-t border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-9 whitespace-nowrap text-xs font-semibold text-teal-50/35">
          {[...marquee, ...marquee].map((keyword, index) => (
            <span key={index} className="flex items-center gap-9">
              {keyword}
              <span className="text-teal-400/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
