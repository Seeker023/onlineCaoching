"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    number: 1,
    title: "Create your free account",
    description:
      "Sign up in under a minute. No credit card required — just your email and you're in.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Browse and enroll in a course",
    description:
      "Explore courses by subject, level, or format. Find what fits your goals and start instantly.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Learn live or at your own pace",
    description:
      "Join live sessions or watch recorded lessons whenever it suits you. Your schedule, your terms.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-strip-bg">
      <div ref={ref} className="max-w-5xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Start learning in{" "}
            <span className="gradient-text">3 steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-0 border-t-2 border-dashed border-border" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center relative`}
            >
              {/* Number circle */}
              <div className="w-12 h-12 rounded-full border-2 border-accent bg-surface flex items-center justify-center mb-5 relative z-10">
                <span className="text-accent font-bold text-lg">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="font-bold text-text text-base mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
