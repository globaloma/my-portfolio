export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  featured?: boolean;
  problem: string;
  solution: string;
  howItWorks: string[];
  challenges: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};