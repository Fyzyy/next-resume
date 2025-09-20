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
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    }
    return dateStr;
  };

  return (
    <section id="experience" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-6 lg:space-y-8">
              {data.experience.map((exp: any, index: number) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-12 lg:ml-16 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4 p-4 sm:p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          {/* Company logo */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            {exp.logo ? (
                              <Image
                                src={`/${exp.logo}`}
                                alt={exp.company}
                                width={48}
                                height={48}
                                className="rounded-lg w-full h-full object-contain"
                                suppressHydrationWarning
                              />
                            ) : (
                              <Building2
                                className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
                                suppressHydrationWarning
                              />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-base sm:text-lg text-primary font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar
                              className="w-4 h-4 mr-2 shrink-0"
                              suppressHydrationWarning
                            />
                            <span className="truncate">
                              {formatDate(exp.start)} - {formatDate(exp.end)}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin
                              className="w-4 h-4 mr-2 shrink-0"
                              suppressHydrationWarning
                            />
                            <span className="truncate">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 p-4 sm:p-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {exp.tasks.map((task: string, taskIndex: number) => (
                          <li key={taskIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                            <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                              {task}
                            </span>
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
