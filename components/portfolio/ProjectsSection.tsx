"use client";

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Calendar, ExternalLink, Github} from "lucide-react";

interface ProjectsSectionProps {
  data: any;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
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
      return `${monthNames[parseInt(month) - 1]} 1`;
    }
    return dateStr;
  };

  const getProjectTechnologies = (projectName: string) => {
    if (projectName === "CycloEval") {
      return ["FastAPI", "React", "Leaflet", "SQLite", "Python", "GPS"];
    }
    if (projectName === "Smart Intersections") {
      return ["Android", "Java", "OpenData", "API REST"];
    }
    return [];
  };

  return (
    <section id="projects" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Discover my academic and personal achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {data.projects.map((project: any, index: number) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <CardHeader className="pb-4 p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-base sm:text-xl shrink-0">
                      {project.name.substring(0, 2).toUpperCase()}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors mb-2 leading-tight">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">
                        {project.role}
                      </Badge>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 shrink-0" />
                        <span className="truncate">
                          {formatDate(project.start)} - {formatDate(project.end)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-4 sm:p-6 pt-0">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2 sm:space-y-3">
                    {project.tasks.map((task: string, taskIndex: number) => (
                      <div key={taskIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mt-4 sm:mt-6">
                  <h4 className="font-medium text-xs sm:text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {getProjectTechnologies(project.name).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-3 sm:pt-4 mt-3 sm:mt-4">
                  {project.srcUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.srcUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
