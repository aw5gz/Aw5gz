"use client";

import { useState } from "react";

export default function SovereignFactoryLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your API endpoint / webhook
    console.log("Captured Email:", email);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]"></div>

            <span className="uppercase tracking-[0.25em] font-bold text-emerald-400 text-sm">
              Sovereign Factory
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

            <a href="#features" className="hover:text-emerald-400 transition">
              System
            </a>

            <a href="#workflow" className="hover:text-emerald-400 transition">
              Workflow
            </a>

            <a href="#pricing" className="hover:text-emerald-400 transition">
              Pricing
            </a>

            <a
              href="https://payhip.com/YOUR-PRODUCT-ID"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-5 py-3 rounded-xl font-bold transition"
            >
              Get Access
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}

      <section className="relative py-28 px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_35%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 px-4 py-2 rounded-full text-sm mb-8">
            AI Revenue Engine • Outreach • Automation • Monetization
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] max-w-5xl mx-auto">
            Build An AI Revenue Engine That Runs Daily
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg md:text-xl leading-relaxed">
            Sovereign Factory automates lead generation, personalized outreach,
            content production, ROI simulations, and monetization workflows so
            you can scale without manually operating every moving part like an
            exhausted call-center octopus.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <a
              href="#pricing"
              className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-4 rounded-2xl font-bold transition"
            >
              Start The Factory
            </a>

            <a
              href="#features"
              className="border border-white/10 hover:border-emerald-400 text-white hover:text-emerald-400 px-8 py-4 rounded-2xl transition"
            >
              Explore System
            </a>
          </div>

          {/* STATS */}

          <div className="grid md:grid-cols-4 gap-5 mt-20">

            {[
              ["4%+", "Target Reply Rate"],
              ["24/7", "Automated Operations"],
              ["AI", "Lead + Outreach Engine"],
              ["$17 → $2K+", "Ascension Funnel"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="bg-zinc-900/80 border border-white/5 rounded-2xl p-6 text-left"
              >
                <h2 className="text-4xl font-black text-emerald-400">
                  {title}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section id="features" className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              The System
            </h2>

            <p className="mt-6 text-zinc-400 text-lg">
              Three integrated engines designed to generate leads, automate
              outreach, and convert attention into revenue. Humanity invented
              “funnels” because apparently just selling useful things directly
              was too emotionally straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {[
              {
                title: "Phalanx-Alpha",
                desc: "Autonomous lead harvesting, niche targeting, ROI forecasting, and Telegram alerts.",
              },
              {
                title: "ROI Simulator",
                desc: "Interactive forecasting engine that converts cold traffic into qualified buyers and strategy calls.",
              },
              {
                title: "Sovereign Dashboard",
                desc: "Track reply rates, conversions, vertical performance, and operational metrics in real-time.",
              },
              {
                title: "Cold Email Automation",
                desc: "Generate and send personalized outreach sequences without copy-pasting your sanity away.",
              },
              {
                title: "Content Engine",
                desc: "Produce daily content batches using AI workflows, hooks, repurposing systems, and automation loops.",
              },
              {
                title: "High-Ticket Backend",
                desc: "Convert low-ticket buyers into premium automation clients through audits and implementation.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-zinc-900/80 border border-white/5 hover:border-emerald-400/40 rounded-3xl p-8 transition duration-300"
              >
                <h3 className="text-2xl font-bold text-emerald-400">
                  {feature.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}

      <section id="workflow" className="py-24 px-6">

        <div className="max-w-6xl mx-auto bg-zinc-900/80 border border-white/5 rounded-[32px] p-10 md:p-16">

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black">
              Daily Automation Loop
            </h2>

            <p className="text-zinc-400 mt-4">
              A predictable operating system for consistent output.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-14">

            {[
              ["06:00", "Harvest Leads"],
              ["08:00", "Telegram Alerts"],
              ["12:00", "Generate Content"],
              ["20:00", "Track Conversions"],
            ].map(([time, action]) => (
              <div
                key={time}
                className="bg-black border border-white/5 rounded-2xl p-8 text-center"
              >
                <h3 className="text-3xl font-black text-emerald-400">
                  {time}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}

      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Get The System Blueprint
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Enter your email to access the AI Content Factory system,
            implementation workflow, and monetization framework.
          </p>

          {!submitted ? (

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-emerald-400"
              />

              <button
                type="submit"
                className="bg-emerald-400 hover:bg-emerald-300 text-black px-8 py-5 rounded-2xl font-bold transition"
              >
                Unlock Access
              </button>
            </form>

          ) : (

            <div className="mt-10 bg-emerald-400/10 border border-emerald-400/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-400">
                Access Request Received
              </h3>

              <p className="text-zinc-300 mt-3">
                Your blueprint delivery workflow is now armed and operational.
              </p>
            </div>

          )}
        </div>
      </section>

      {/* PRICING */}

      <section id="pricing" className="py-24 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="bg-zinc-900/80 border border-white/5 rounded-[32px] p-12 text-center">

            <h2 className="text-5xl font-black">
              Launch The Factory
            </h2>

            <div className="text-7xl font-black text-emerald-400 mt-6">
              $17
            </div>

            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Get the complete 7-Day AI Content Factory system,
              workflows, scripts, automation templates, and backend
              monetization framework.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10 text-left">

              {[
                "7-Day AI Content Factory",
                "Cold outreach framework",
                "ROI simulator structure",
                "Lead generation workflow",
                "Automation deployment map",
                "High-ticket ascension path",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black border border-white/5 rounded-2xl px-5 py-4 text-zinc-300"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <a
              href="https://payhip.com/YOUR-PRODUCT-ID"
              className="inline-block mt-10 bg-emerald-400 hover:bg-emerald-300 text-black px-10 py-5 rounded-2xl font-bold text-lg transition"
            >
              Get Instant Access
            </a>

            <p className="mt-5 text-zinc-500 text-sm">
              Replace the Payhip URL with your real checkout link.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/5 py-10 px-6 text-center text-zinc-500">
        Sovereign Factory © 2026 • Autonomous Revenue Infrastructure
      </footer>
    </main>
  );
}
