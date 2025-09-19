"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Building2, Calendar, MapPin} from "lucide-react";
import Image from "next/image";

interface ExperienceSectionProps {
  data: any;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  const formatDate = (dateStr: string) => {
    if (dateStr.includes("-")) {
      const [year, month] = dateStr.split("-");
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    return dateStr;
  };

  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {data.experience.map((exp: any, index: number) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {/* Company logo */}
                          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            {exp.logo ? (
                              <Image
                                src={`/${exp.logo}`}
                                alt={exp.company}
                                width={48}
                                height={48}
                                className="rounded-lg"
                                suppressHydrationWarning
                              />
                            ) : (
                              <Building2 className="w-6 h-6 text-muted-foreground" suppressHydrationWarning />
                            )}
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" suppressHydrationWarning />
                            {formatDate(exp.start)} - {formatDate(exp.end)}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" suppressHydrationWarning />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {exp.tasks.map((task: string, taskIndex: number) => (
                          <li key={taskIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
