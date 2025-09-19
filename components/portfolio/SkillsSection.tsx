"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Database, Palette, Settings, Wrench} from "lucide-react";
import {resumeType} from "@/types/resumeType";

interface SkillsSectionProps {
  data: resumeType;
}

export function SkillsSection({ data }: SkillsSectionProps) {
  const iconMapping = {
    "Frontend": { icon: Palette, color: "text-blue-600", bgColor: "bg-blue-50" },
    "Backend": { icon: Database, color: "text-green-600", bgColor: "bg-green-50" },
    "DevOps": { icon: Settings, color: "text-purple-600", bgColor: "bg-purple-50" },
    "Tools": { icon: Wrench, color: "text-orange-600", bgColor: "bg-orange-50" }
  };

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
          {Object.entries(data.skills).map(([category, skills], index) => {
            const categoryConfig = iconMapping[category as keyof typeof iconMapping];
            if (!categoryConfig) return null;

            const IconComponent = categoryConfig.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${categoryConfig.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${categoryConfig.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map((skill: string, skillIndex: number) => (
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
