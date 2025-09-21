export type Profile = {
  name: string;
  title: string;
  role: string;
  photo?: string;
  location: string[];
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  summary: string;
};

export type Skills = {
  [category: string]: string[];
};

export type Experience = {
  company: string;
  role: string;
  logo?: string;
  location?: string;
  start: string; // format "YYYY-MM"
  end: string; // format "YYYY-MM" ou "Present"
  tasks?: string[];
};

export type Education = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Project = {
  name: string;
  role: string;
  start: string;
  end: string;
  tasks: string[];
  srcUrl?: string;
  demoUrl?: string;
};

export type resumeType = {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  projects?: Project[];
  languages?: Language[];
  interests?: string[];
};
