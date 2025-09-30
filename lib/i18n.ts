export enum SupportedLocale {
  EN = "EN",
  FR = "FR",
}

export type ResumeLabels = {
  contact: string;
  skills: string;
  education: string;
  experience: string;
  projects: string;
  languages: string;
  interests: string;
};

export const resumeLabels: Record<SupportedLocale, ResumeLabels> = {
  [SupportedLocale.EN]: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    languages: "LANGUAGES",
    interests: "INTERESTS",
  },
  [SupportedLocale.FR]: {
    contact: "CONTACT",
    skills: "COMPÉTENCES",
    education: "FORMATIONS",
    experience: "EXPÉRIENCES",
    projects: "PROJETS",
    languages: "LANGUES",
    interests: "CENTRES D'INTÉRÊT",
  },
};
