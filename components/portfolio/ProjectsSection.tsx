"use client";

import {useState} from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Calendar, ExternalLink, Github} from "lucide-react";

interface ProjectsSectionProps {
  data: any;
}

export function ProjectsSection({ data }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my academic and personal achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.projects.map((project: any, index: number) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {project.name.substring(0, 2).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                        {project.name}
                      </h3>
                      <Badge variant="secondary" className="mb-2">
                        {project.role}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(project.start)} - {formatDate(project.end)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Description du projet */}
                  <div className={`space-y-3 ${selectedProject === index ? 'block' : 'line-clamp-3'}`}>
                    {project.tasks.map((task: string, taskIndex: number) => (
                      <div key={taskIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies - Always at bottom */}
                <div className="space-y-3 mt-6">
                  <h4 className="font-medium text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {getProjectTechnologies(project.name).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions - Always at bottom */}
                <div className="flex gap-2 pt-4 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
