import Header from "../components/Header";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import SkillsDashboard from "../components/SkillsDashboard";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-16">
      <Header />
      <Stats />
      <Projects />
      <SkillsDashboard />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}