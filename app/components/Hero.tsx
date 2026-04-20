"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const words = ["The", "Smarter", "Way", "to", "Learn."];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden grain-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ===== LEFT COLUMN — TEXT ===== */}
          <div
            className={`flex-1 max-w-xl transition-all duration-700 ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/25 bg-accent-light/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-medium text-accent tracking-wide">
                Online Coaching, Reimagined
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-5">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`hero-word mr-2.5 sm:mr-3 ${
                    word === "Smarter" ? "gradient-text" : "text-text"
                  }`}
                  style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-md">
              Live classes, recorded courses, and personal coaching for students
              who want flexibility and real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-5">
              <a
                href="#cta"
                className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all duration-200 animate-pulse-glow"
              >
                Start Learning Free
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-border text-text font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
              >
                See All Courses
              </a>
            </div>

            {/* Trust line */}
            <p className="text-xs text-text-muted">
              No credit card required · Cancel anytime
            </p>
          </div>

          {/* ===== RIGHT COLUMN — FLOATING CARDS ===== */}
          <div
            className={`flex-1 relative w-full max-w-lg min-h-[360px] sm:min-h-[400px] transition-all duration-1000 delay-300 ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* Live Class Card */}
            <div className="animate-float absolute top-0 right-0 w-64 sm:w-72 bg-surface rounded-2xl shadow-lg shadow-black/[0.06] border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </span>
                  <span className="text-[11px] font-semibold text-success uppercase tracking-wider">
                    Live Now
                  </span>
                </div>
                <span className="text-[11px] text-text-muted">42 watching</span>
              </div>
              <h3 className="font-semibold text-sm text-text mb-1">
                Introduction to Calculus
              </h3>
              <p className="text-xs text-text-muted mb-4">with Prof. Sharma</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-1.5">
                  {["bg-indigo-400", "bg-rose-400", "bg-amber-400"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full ${bg} border-2 border-white`}
                      />
                    )
                  )}
                  <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-[7px] font-semibold text-text-muted">
                      +39
                    </span>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-full bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors">
                  Join Now
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="animate-float-delayed absolute bottom-8 sm:bottom-10 left-0 w-52 sm:w-56 bg-surface rounded-2xl shadow-lg shadow-black/[0.06] border border-border p-4">
              <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
                Your Progress
              </p>
              <h4 className="font-semibold text-sm text-text mb-3">
                Organic Chemistry
              </h4>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2 overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-[2s] ease-out"
                  style={{ width: loaded ? "68%" : "0%" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-text-muted">
                  68% complete
                </span>
                <button className="text-[11px] font-semibold text-accent hover:underline">
                  Continue →
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="animate-float-badge absolute top-44 sm:top-48 left-2 sm:left-4">
              <div className="px-4 py-2 rounded-full bg-amber-light border border-amber/20 shadow-sm">
                <span className="text-sm font-medium">
                  ⭐ Rated #1 by learners
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
