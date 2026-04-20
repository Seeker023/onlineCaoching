"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section id="cta" className="py-20 md:py-28">
      <div ref={ref} className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="reveal rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-[#DDD6FE] bg-gradient-to-br from-[#F5F3FF] to-[#EEF2FF] relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/[0.04] blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-amber/[0.06] blur-2xl" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4">
              Ready to start your learning journey?
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
              Join our platform and learn from the best — at your own pace, on
              your schedule.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <a
                href="#"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all duration-200 animate-pulse-glow shadow-sm"
              >
                Start for Free
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
                href="#"
                className="inline-flex items-center text-sm font-medium text-text-muted hover:text-accent transition-colors"
              >
                Talk to an advisor
                <svg
                  className="ml-1 w-3.5 h-3.5"
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
            </div>

            <p className="text-xs text-text-muted">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
