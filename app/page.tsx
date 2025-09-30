import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Footer } from "@/components/portfolio/Footer";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import resumeData from "@/data/maximilien.EN.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection data={resumeData} />
        <SkillsSection data={resumeData} />
        <ExperienceSection data={resumeData} />
        <ProjectsSection data={resumeData} />
        <EducationSection data={resumeData} />
        <ContactSection data={resumeData} />
      </main>
      <Footer data={resumeData} />
      <ScrollToTop />
    </div>
  );
}
