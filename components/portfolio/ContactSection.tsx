"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  data: any;
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Feel free to reach out to discuss your
            projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a
                  href={`mailto:${data.profile.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {data.profile.email}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <a
                  href={`tel:${data.profile.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {data.profile.phone}
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">
                  {data.profile.location.join(" • ")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center mt-12">
            <h4 className="font-semibold mb-6">Follow Me</h4>
            <div className="flex justify-center space-x-6">
              <a
                href={data.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href={data.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
