"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Calendar, GraduationCap, School} from "lucide-react";

interface EducationSectionProps {
  data: any;
}

export function EducationSection({ data }: EducationSectionProps) {
  return (
    <section id="education" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and degrees
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {data.education.map((edu: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <School className="w-4 h-4 mr-2" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.start} - {edu.end}</span>
                        </div>
                      </div>
                    </div>

                    <Badge variant="outline" className="self-start">
                      {edu.end === "2025" ? "In Progress" : "Graduated"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Add specific details according to the degree */}
                  {edu.degree.includes("Software Engineering") && (
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Engineering program specialized in software engineering, covering full-stack development,
                        software architecture, and agile methodologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Web Development</Badge>
                        <Badge variant="secondary">Artificial Intelligence</Badge>
                        <Badge variant="secondary">Project Management</Badge>
                        <Badge variant="secondary">Software Architecture</Badge>
                      </div>
                    </div>
                  )}

                  {edu.degree.includes("Mathematics and Physics") && (
                    <div className="space-y-3">
                      <p className="text-muted-foreground">
                        Preparatory classes for engineering schools, intensive training in
                        mathematics and physics preparing for entrance exams.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Mathematics</Badge>
                        <Badge variant="secondary">Physics</Badge>
                        <Badge variant="secondary">Computer Science</Badge>
                        <Badge variant="secondary">Engineering Sciences</Badge>
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
