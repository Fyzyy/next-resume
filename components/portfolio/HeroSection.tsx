"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ArrowDown, Download, Github, Linkedin, Mail, MapPin,} from "lucide-react";
import {useEffect, useState} from "react";

interface HeroSectionProps {
  data: any;
}

export function HeroSection({ data }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculer la transformation basée sur le scroll
  const maxScroll = 400;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  const translateY = scrollProgress * 80;
  const opacity = 1 - scrollProgress * 0.3;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
      style={{
        transform: `translateY(-${translateY}px)`,
        opacity: opacity,
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Scroll indicator background for better visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl z-10">
        <div className="text-center space-y-6 lg:space-y-8 animate-fade-in">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
            {data.profile.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")}
          </div>

          {/* Name and Title */}
          <div className="space-y-3 lg:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              {data.profile.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              {data.profile.title}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{data.profile.location.join(" • ")}</span>
          </div>

          {/* Summary */}
          <div className="max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground text-center lg:text-left leading-relaxed px-4 sm:px-0">
              {data.profile.summary}
            </p>
          </div>

          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            {Array.from({ length: 6 }, (_, i) => {
              const isEven = i % 2 === 0;
              const skillIndex = Math.floor(i / 2);
              const skill = isEven
                ? data.skills.Frontend[skillIndex]
                : data.skills.Backend[skillIndex];
              return skill ? (
                <Badge key={i} variant="secondary" className="text-xs sm:text-sm px-2 py-1">
                  {skill}
                </Badge>
              ) : null;
            }).filter(Boolean)}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[150px] text-sm sm:text-base"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[150px] text-sm sm:text-base"
              asChild
            >
              <a href="/resume">
                <Download className="w-4 h-4 mr-2" />
                View My Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 pt-2">
            <a
              href={data.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href={`mailto:${data.profile.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToSkills}
        >
          <div className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm hidden sm:block">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
