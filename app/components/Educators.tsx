"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

const educators = [
  {
    name: "Dr. A. Sharma",
    initials: "AS",
    subject: "Mathematics",
    gradient: "from-violet-400 to-indigo-500",
    bio: "Experienced mathematics educator with a passion for making complex concepts accessible to every student.",
  },
  {
    name: "Prof. R. Kumar",
    initials: "RK",
    subject: "Physics",
    gradient: "from-orange-400 to-rose-500",
    bio: "Dedicated physics instructor focused on building strong fundamentals and intuitive problem-solving skills.",
  },
  {
    name: "Ms. P. Gupta",
    initials: "PG",
    subject: "Chemistry",
    gradient: "from-emerald-400 to-teal-500",
    bio: "Chemistry specialist with expertise in both organic and inorganic chemistry, making reactions feel intuitive.",
  },
  {
    name: "Mr. S. Patel",
    initials: "SP",
    subject: "Coding",
    gradient: "from-blue-400 to-cyan-500",
    bio: "Software developer and educator who teaches practical coding skills for real-world applications.",
  },
];

export default function Educators() {
  const ref = useScrollReveal();

  return (
    <section id="educators" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Meet Your Educators
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
            Our educators are subject matter experts dedicated to student
            success.
          </p>
        </div>

        {/* Educator cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educators.map((edu, i) => (
            <div
              key={edu.name}
              className={`reveal reveal-delay-${i + 1} group bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-all duration-500 scale-100 group-hover:scale-125 blur-md" />
                <div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white font-bold text-xl tracking-wide">
                    {edu.initials}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-bold text-text text-base mb-1">
                {edu.name}
              </h3>

              {/* Subject */}
              <p className="text-accent text-sm font-medium mb-3">
                {edu.subject}
              </p>

              {/* Bio */}
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {edu.bio}
              </p>

              {/* View Profile link */}
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-accent hover:underline underline-offset-2 transition-colors"
              >
                View Profile
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
          ))}
        </div>
      </div>
    </section>
  );
}
