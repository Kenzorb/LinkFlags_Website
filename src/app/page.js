'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Image,
  Code2,
  ShieldCheck,
  Search,
  Sparkles,
  Flag,
  MousePointerClick,
  CheckCircle2,
} from "lucide-react";

const previewBadges = [
  { icon: Clock, label: "5 min read", className: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  { icon: Image, label: "Image-heavy", className: "bg-amber-50 text-amber-700 border-amber-200" },
  { icon: Code2, label: "Code-heavy", className: "bg-violet-50 text-violet-700 border-violet-200" },
  { icon: ShieldCheck, label: "Paywall", className: "bg-rose-50 text-rose-700 border-rose-200" },
];

const features = [
  {
    icon: Clock,
    title: "Read time at a glance",
    description: "See whether a search result is a quick skim or a longer read before opening it.",
  },
  {
    icon: Image,
    title: "Visual-content hints",
    description: "Spot image-heavy pages when you are looking for tutorials, guides, or visual references.",
  },
  {
    icon: Code2,
    title: "Code-heavy detection",
    description: "Find technical pages with code examples faster when searching for developer resources.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer wasted clicks",
    description: "Choose links with more confidence using small preview signals directly on Google Search.",
  },
];

const steps = [
  "Search on Google as usual",
  "LinkFlags checks visible results",
  "Preview badges appear beside links",
  "Open the result that fits best",
];

export default function LinkFlagsLandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <section className="relative px-6 py-6 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20">
              <Flag size={19} fill="currentColor" />
            </div>
            <span className="text-lg">
              Link<span className="text-cyan-600">Flags</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">Features</a>
            <a href="#how" className="transition hover:text-slate-950">How it works</a>
            <a href="#faq" className="transition hover:text-slate-950">FAQ</a>
          </div>

          <a
            href="https://chromewebstore.google.com/detail/linkflags-preview-signals/mdbmofdmgnjpnkekodinnbelnkbhmejm"
            target="_blank"
            className="rounded-xl bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Add to Chrome
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm">
              <Sparkles size={16} /> Preview signals before opening links
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-7xl">
              Know before <span className="text-cyan-600">you click.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              LinkFlags adds useful badges beside Google Search results, helping you spot read time, image-heavy pages, code-heavy pages, and possible paywalls before opening a link.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://chromewebstore.google.com/detail/linkflags-preview-signals/mdbmofdmgnjpnkekodinnbelnkbhmejm"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
              >
                Add to Chrome <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-100"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-600" /> Lightweight</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-600" /> Works on Google Search</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-600" /> Built for faster browsing</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-200/50 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-500 shadow-sm">
                  <Search size={18} />
                  <span className="text-sm">best way to learn react hooks</span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                {["React Hooks Tutorial", "Understanding useEffect", "React Docs: Hooks API"].map((title, index) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-2 text-sm text-emerald-600">
                      example.com/{index === 0 ? "tutorial" : index === 1 ? "use-effect" : "docs"}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      A practical guide with examples, explanations, and references for developers.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {previewBadges.slice(0, index === 0 ? 3 : index === 1 ? 2 : 4).map(({ icon: Icon, label, className }) => (
                        <span key={label} className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${className}`}>
                          <Icon size={13} /> {label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">Features</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Small badges. Better decisions.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              LinkFlags gives you lightweight context before you spend time opening another tab.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">How it works</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">Works where your search starts.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              LinkFlags appears beside search results, so you can decide which page is worth your attention before opening it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="font-semibold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-14 text-center text-white shadow-2xl shadow-slate-200/80">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20">
            <MousePointerClick size={30} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Search faster. Click smarter.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Add LinkFlags to your browser and make Google Search results easier to judge at a glance.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/linkflags-preview-signals/mdbmofdmgnjpnkekodinnbelnkbhmejm"
            target="_blank"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Add to Chrome <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>

      <section id="faq" className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          {[
            ["Does LinkFlags change my search results?", "No. It adds small helper badges beside existing Google Search links."],
            ["Is it meant to replace opening pages?", "No. It helps you decide which result is worth opening first."],
            ["Who is it useful for?", "Students, researchers, developers, and anyone who frequently searches for articles, guides, documentation, or tutorials."],
          ].map(([question, answer]) => (
            <div key={question} className="p-6">
              <h3 className="font-semibold text-slate-950">{question}</h3>
              <p className="mt-2 leading-7 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 lg:px-12">
        © 2026 LinkFlags. Preview signals before opening links.
      </footer>
    </main>
  );
}
