"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Everything you need to learn{" "}
            <span className="gradient-text">effectively</span>.
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto">
            A thoughtfully designed platform that combines live teaching,
            self-paced learning, and personal mentorship.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* LARGE CARD — Live Interactive Classes */}
          <div className="reveal reveal-delay-1 md:row-span-2 bg-accent-light rounded-2xl p-6 sm:p-8 border border-accent/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-text">
                Live Interactive Classes
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Join real-time classes with educators who answer your questions,
              work through problems, and keep you engaged throughout.
            </p>

            {/* Mock UI: Live class countdown */}
            <div className="bg-surface rounded-xl border border-border p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                  </span>
                  <span className="text-xs font-semibold text-success">
                    Next class in 15 min
                  </span>
                </div>
                <span className="text-[11px] text-text-muted">
                  14:30 — 15:30
                </span>
              </div>
              <p className="font-semibold text-sm text-text mb-1">
                Electrostatics — Coulomb&apos;s Law
              </p>
              <p className="text-xs text-text-muted mb-4">Physics · Live</p>
              <button className="w-full py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors">
                Join Classroom
              </button>
            </div>
          </div>

          {/* MEDIUM CARD — Learn at Your Own Pace */}
          <div className="reveal reveal-delay-2 bg-surface rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-text">
                Learn at Your Own Pace
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Access recorded courses anytime, anywhere. Pause, rewind, and
              revisit concepts until they stick. No deadlines, no pressure.
            </p>
          </div>

          {/* MEDIUM CARD — 1-on-1 Mentorship */}
          <div className="reveal reveal-delay-3 bg-amber-light rounded-2xl p-6 sm:p-8 border border-amber/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-amber"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-text">
                1-on-1 Mentorship
              </h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Book personal sessions with subject experts. Get tailored guidance
              on topics you find challenging and build a clear study plan.
            </p>
          </div>

          {/* SMALL CARD — Doubt Solving */}
          <div className="reveal reveal-delay-4 bg-surface rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-text">Doubt Solving</h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Get quick, clear answers to your questions from educators and
              peers.
            </p>
          </div>

          {/* SMALL CARD — Track Your Progress */}
          <div className="reveal reveal-delay-5 bg-success-light rounded-2xl p-6 border border-success/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-success/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-success"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-text">Track Your Progress</h3>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Visual progress indicators show how far you&apos;ve come and
              what&apos;s next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
