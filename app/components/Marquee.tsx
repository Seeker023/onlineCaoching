export default function Marquee() {
  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Coding",
    "JEE Prep",
    "NEET",
    "UPSC",
    "English",
    "Economics",
    "History",
    "Machine Learning",
  ];

  // Double the items for seamless infinite scroll
  const allSubjects = [...subjects, ...subjects];

  return (
    <section className="py-4 bg-strip-bg overflow-hidden fade-mask">
      <div className="flex marquee-track">
        {allSubjects.map((subject, i) => (
          <span
            key={i}
            className="inline-flex items-center px-4 py-2 mx-2 rounded-full bg-surface border border-border text-xs font-medium text-text-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)] whitespace-nowrap hover:border-accent/30 hover:text-accent transition-colors duration-200"
          >
            {subject}
          </span>
        ))}
      </div>
    </section>
  );
}
