import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import Educators from "./components/Educators";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Courses />
        <HowItWorks />
        <Educators />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
