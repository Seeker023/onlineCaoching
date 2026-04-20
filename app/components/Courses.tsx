"use client";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Course {
  id: number;
  title: string;
  educator: string;
  subject: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  tagColor: string;
  tagBg: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  tags: string[];
}

const allCourses: Course[] = [
  {
    id: 1,
    title: "Complete Mathematics for JEE",
    educator: "Educator TBA",
    subject: "Mathematics",
    emoji: "📐",
    gradientFrom: "#EEF2FF",
    gradientTo: "#C7D2FE",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    level: "Intermediate",
    price: "Coming Soon",
    tags: ["jee", "recorded"],
  },
  {
    id: 2,
    title: "Physics: Mechanics & Waves",
    educator: "Educator TBA",
    subject: "Physics",
    emoji: "⚡",
    gradientFrom: "#FFF7ED",
    gradientTo: "#FED7AA",
    tagColor: "#EA580C",
    tagBg: "#FFF7ED",
    level: "Beginner",
    price: "Free",
    tags: ["free", "live"],
  },
  {
    id: 3,
    title: "Organic Chemistry Essentials",
    educator: "Educator TBA",
    subject: "Chemistry",
    emoji: "🧪",
    gradientFrom: "#FDF4FF",
    gradientTo: "#E9D5FF",
    tagColor: "#9333EA",
    tagBg: "#FDF4FF",
    level: "Beginner",
    price: "Free",
    tags: ["free", "recorded"],
  },
  {
    id: 4,
    title: "Biology: Cell Biology & Genetics",
    educator: "Educator TBA",
    subject: "Biology",
    emoji: "🧬",
    gradientFrom: "#F0FDF4",
    gradientTo: "#BBF7D0",
    tagColor: "#16A34A",
    tagBg: "#F0FDF4",
    level: "Intermediate",
    price: "Coming Soon",
    tags: ["neet", "recorded"],
  },
  {
    id: 5,
    title: "Python Programming Fundamentals",
    educator: "Educator TBA",
    subject: "Coding",
    emoji: "💻",
    gradientFrom: "#EFF6FF",
    gradientTo: "#BFDBFE",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    level: "Beginner",
    price: "Free",
    tags: ["free", "coding", "recorded"],
  },
  {
    id: 6,
    title: "Advanced Calculus & Linear Algebra",
    educator: "Educator TBA",
    subject: "Mathematics",
    emoji: "📊",
    gradientFrom: "#EEF2FF",
    gradientTo: "#C7D2FE",
    tagColor: "#6366F1",
    tagBg: "#EEF2FF",
    level: "Advanced",
    price: "Coming Soon",
    tags: ["jee", "live"],
  },
  {
    id: 7,
    title: "NEET Biology Crash Course",
    educator: "Educator TBA",
    subject: "Biology",
    emoji: "🔬",
    gradientFrom: "#F0FDF4",
    gradientTo: "#BBF7D0",
    tagColor: "#16A34A",
    tagBg: "#F0FDF4",
    level: "Intermediate",
    price: "Coming Soon",
    tags: ["neet", "live"],
  },
  {
    id: 8,
    title: "Web Development with React",
    educator: "Educator TBA",
    subject: "Coding",
    emoji: "⚛️",
    gradientFrom: "#EFF6FF",
    gradientTo: "#BFDBFE",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    level: "Intermediate",
    price: "Coming Soon",
    tags: ["coding", "recorded"],
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "free", label: "Free" },
  { key: "live", label: "Live" },
  { key: "recorded", label: "Recorded" },
  { key: "jee", label: "JEE / NEET" },
  { key: "coding", label: "Coding" },
] as const;

function LevelBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
    Advanced: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
        colors[level] || ""
      }`}
    >
      {level}
    </span>
  );
}

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useScrollReveal();

  const filtered =
    activeFilter === "all"
      ? allCourses
      : allCourses.filter((c) =>
          activeFilter === "jee"
            ? c.tags.includes("jee") || c.tags.includes("neet")
            : c.tags.includes(activeFilter)
        );

  return (
    <section id="courses" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Explore Our Courses
          </h2>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
            Browse by subject and level. Find what suits your goals.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal reveal-delay-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-accent text-white shadow-sm"
                  : "bg-surface text-text-muted border border-border hover:border-accent/30 hover:text-text"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Horizontal scroll course cards */}
        <div className="reveal reveal-delay-2">
          <div className="course-scroll">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="w-72 sm:w-80 bg-surface rounded-2xl border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Gradient thumbnail */}
                <div
                  className="h-36 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})`,
                  }}
                >
                  <span className="text-5xl">{course.emoji}</span>
                  <span className="absolute bottom-3 left-3 text-xs font-semibold opacity-40">
                    {course.subject}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Subject tag */}
                  <span
                    className="inline-flex text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2.5"
                    style={{
                      color: course.tagColor,
                      backgroundColor: course.tagBg,
                    }}
                  >
                    {course.subject}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-text text-[15px] leading-snug mb-1.5 line-clamp-2 min-h-[40px]">
                    {course.title}
                  </h3>

                  {/* Educator */}
                  <p className="text-xs text-text-muted mb-3">
                    {course.educator}
                  </p>

                  {/* Level + Price */}
                  <div className="flex items-center justify-between mb-4">
                    <LevelBadge level={course.level} />
                    <span
                      className={`text-sm font-bold ${
                        course.price === "Free" ? "text-success" : "text-text"
                      }`}
                    >
                      {course.price}
                    </span>
                  </div>

                  {/* Enroll button */}
                  <button className="w-full py-2.5 rounded-xl border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    Enroll
                  </button>
                </div>
              </div>
            ))}

            {/* Empty state if no results */}
            {filtered.length === 0 && (
              <div className="flex items-center justify-center w-full py-16">
                <p className="text-text-muted text-sm">
                  No courses found for this filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
