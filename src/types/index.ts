export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requiredSkills: Skill[];
  postedDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  skills: Skill[];
  experience: number;
  education: string[];
  certifications: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  skills: string[];
}