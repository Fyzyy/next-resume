"use client";

import {Card, CardContent} from "@/components/ui/card";
import {User} from "lucide-react";

interface AboutSectionProps {
  data: any;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mon profil et mes motivations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">Software Engineer - Fullstack</h3>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                  {data.profile.summary}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
