"use client";

import { Separator } from "@/components/ui/separator";
import { Github, Heart, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  data: any;
}

export function Footer({ data }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{data.profile.name}</h3>
            <p className="text-muted-foreground mb-4">{data.profile.title}</p>
            <p className="text-sm text-muted-foreground">
              {data.profile.location.join(" • ")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Skills", id: "skills" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${data.profile.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {data.profile.email}
              </a>

              <div className="flex space-x-4 mt-4">
                <a
                  href={data.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={data.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {data.profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
