import resumeData from "@/data/maximilien.json";
import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { Footer } from "@/components/portfolio/Footer";

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
