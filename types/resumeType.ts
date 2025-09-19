export type Profile = {
  name: string;
  title: string;
  photo?: string; // Chemin vers l'image de profil (optionnel)
  location: string[];
  email: string;
  phone?: string; // Numéro de téléphone (optionnel)
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
  logo?: string; // Chemin vers le logo de l'entreprise (optionnel)
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
};

export type resumeType = {
  profile: Profile;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  projects?: Project[];  // Ajout du champ projects
  languages?: Language[];
  interests?: string[];
};
