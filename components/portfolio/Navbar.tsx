"use client";

import {
  Briefcase,
  FileText,
  FolderOpen,
  GraduationCap,
  Home,
  Mail,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import resumeData from "@/data/maximilien.json";
import { cn } from "@/lib/utils";
import type { resumeType } from "@/types/resumeType";
import { ThemeToggle } from "./ThemeToggle";

const iconMap = {
  Home,
  Settings,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
  FileText,
};

type IconName = keyof typeof iconMap;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const data = resumeData as resumeType;
  const profileName = data.profile.name;
  const profileRole = data.profile.role;
  const profileInitials = data.profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const navItems = [
    { label: "Home", id: "hero", icon: "Home" },
    { label: "Skills", id: "skills", icon: "Settings" },
    { label: "Experience", id: "experience", icon: "Briefcase" },
    { label: "Projects", id: "projects", icon: "FolderOpen" },
    { label: "Education", id: "education", icon: "GraduationCap" },
    { label: "Contact", id: "contact", icon: "Mail" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];

      const scrollPos = window.scrollY + 105;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      let newActiveSection = "hero";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element && scrollPos >= element.offsetTop) {
          newActiveSection = section;
          break;
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 min-w-0">
            <div className="group flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg flex-shrink-0">
                {profileInitials}
              </div>
              <div className="hidden sm:block min-w-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate">
                  {profileName}
                </h1>
                <p className="text-sm text-muted-foreground">{profileRole}</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <NavigationMenu>
              <NavigationMenuList className="bg-background/50 backdrop-blur-sm rounded-full px-2 py-1 border border-border/50">
                {navItems.map((item) => {
                  const IconComponent = iconMap[item.icon as IconName] || Home;
                  return (
                    <NavigationMenuItem key={item.id}>
                      <NavigationMenuLink
                        className={cn(
                          "flex flex-col items-center space-y-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground shadow-lg scale-105"
                            : "text-foreground/70 hover:text-foreground hover:bg-accent/50",
                        )}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs whitespace-nowrap">
                          {item.label}
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle className="shadow-md hover:shadow-lg transition-all duration-300" />

            <Button
              variant="outline"
              size="sm"
              asChild
              className="shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0"
            >
              <a href="/resume" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden lg:block">Resume</span>
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-3 flex-shrink-0">
            <ThemeToggle className="shadow-md" />

            <Button variant="outline" size="sm" asChild className="shadow-md">
              <a href="/resume" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
              </a>
            </Button>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-full">
                    {navItems.find((item) => item.id === activeSection)
                      ?.label || "Navigation"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover border rounded-md shadow-lg z-50">
                    <div className="grid gap-2">
                      <div className="pb-2 mb-2 border-b">
                        <p className="text-sm font-medium">Navigate to</p>
                        <p className="text-xs text-muted-foreground">
                          Jump to any section
                        </p>
                      </div>
                      {navItems.map((item) => {
                        const IconComponent =
                          iconMap[item.icon as IconName] || Home;
                        return (
                          <NavigationMenuLink
                            key={item.id}
                            className={cn(
                              "flex items-center space-x-3 p-2.5 rounded-lg cursor-pointer transition-all duration-200",
                              activeSection === item.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-accent",
                            )}
                            onClick={() => scrollToSection(item.id)}
                          >
                            <IconComponent className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{item.label}</span>
                            {activeSection === item.id && (
                              <div className="ml-auto w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            )}
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
