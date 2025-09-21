"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactSectionProps {
  data: any;
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Ready to collaborate? Feel free to reach out to discuss your
            projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Email
                </h4>
                <a
                  href={`mailto:${data.profile.email}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {data.profile.email}
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Phone
                </h4>
                <a
                  href={`tel:${data.profile.phone}`}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {data.profile.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  Location
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {data.profile.location.join(" • ")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <h4 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href={data.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </a>
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
