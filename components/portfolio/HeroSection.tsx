"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ArrowDown, Download, Github, Linkedin, Mail, MapPin} from "lucide-react";
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
  const maxScroll = 400; // Distance de scroll maximum pour l'animation
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  const translateY = scrollProgress * 80; // Translation vers le haut plus prononcée
  const opacity = 1 - (scrollProgress * 0.3); // Réduction d'opacité

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        transform: `translateY(-${translateY}px)`,
        opacity: opacity
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Scroll indicator background for better visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
            {data.profile.name.split(' ').map((n: string) => n[0]).join('')}
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {data.profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              {data.profile.title}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>{data.profile.location.join(" • ")}</span>
          </div>

          {/* Summary */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-left leading-relaxed">
            {data.profile.summary}
          </p>

          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => {
              const isEven = i % 2 === 0;
              const skillIndex = Math.floor(i / 2);
              const skill = isEven ? data.skills.Frontend[skillIndex] : data.skills.Backend[skillIndex];
              return skill ? (
                <Badge key={i} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ) : null;
            }).filter(Boolean)}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[150px]" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="min-w-[150px]" asChild>
              <a href="/resume">
                <Download className="w-4 h-4 mr-2" />
                View My Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a
              href={data.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={data.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${data.profile.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator - Repositionné en dehors de l'animation */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <button
            onClick={scrollToSkills}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full border border-muted-foreground/20 hover:border-foreground/40 bg-background/80 backdrop-blur-sm"
          >
            <ArrowDown className="w-5 h-5" suppressHydrationWarning />
          </button>
        </div>
      </div>
    </section>
  );
}
