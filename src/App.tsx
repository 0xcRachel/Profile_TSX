import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection";
import SkillsShowcase from "./components/SkillsShowcase";
import ProjectsGrid from "./components/ProjectsGrid";
import ContactCommunity from "./components/ContactCommunity";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('href');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, []);
  return (
    <>
      <PageLoader />
      <div className="bg-parchment">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <SkillsShowcase />
          <ProjectsGrid />
          <ContactCommunity />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
