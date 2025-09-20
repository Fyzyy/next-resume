"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, School } from "lucide-react";

interface EducationSectionProps {
  data: any;
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            My academic background and degrees
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 lg:space-y-8">
            {data.education.map((edu: any, index: number) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex items-start text-muted-foreground mb-2">
                          <School className="w-4 h-4 mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base leading-tight break-words">
                            {edu.school}
                          </span>
                        </div>
                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 shrink-0" />
                          <span>
                            {edu.start} - {edu.end}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 p-4 sm:p-6">
                  {/* Add specific details according to the degree */}
                  {edu.degree.includes("Software Engineering") && (
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Engineering program specialized in software engineering,
                        covering full-stack development, software architecture,
                        and agile methodologies.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Web Development
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Artificial Intelligence
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Project Management
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Software Architecture
                        </Badge>
                      </div>
                    </div>
                  )}

                  {edu.degree.includes("Mathematics and Physics") && (
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Intensive preparation for engineering schools with focus
                        on mathematics, physics, and analytical thinking.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Advanced Mathematics
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Physics
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Problem Solving
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Scientific Method
                        </Badge>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
