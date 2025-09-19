"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Database, Palette, Settings, Wrench} from "lucide-react";

interface SkillsSectionProps {
  data: any;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: ["Angular 19+", "Next.js", "TypeScript", "HTML/CSS", "Tailwind"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Spring Boot", "Java", "PostgreSQL", "OpenAPI", "Python", "SQL"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "DevOps",
      icon: Settings,
      skills: ["GitHub", "Azure DevOps", "Docker", "Kubernetes"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["IntelliJ", "LLM", "Jira"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to build modern and efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${category.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
