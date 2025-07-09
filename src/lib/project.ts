export interface Project {
  title: string;
  link: string;
  github: string;
  description: string;
  image: string;
  tags: string[];
}
export const projects: Project[] = [
  {
    title: "Landing Page",
    link: "https://github.com/maheshmoholkar/landing-page",
    github: "https://github.com/maheshmoholkar/landing-page",
    description: "A landing page for a company",
    image: "/assets/projects/elearning.jpg",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Landing Page",
    link: "https://github.com/maheshmoholkar/landing-page",
    github: "https://github.com/maheshmoholkar/landing-page",
    description: "A landing page for a company",
    image: "/assets/projects/game-engine.jpg",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
];
