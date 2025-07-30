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
    title: "Ignite+ LMS",
    link: "https://ignite-plus-lms.vercel.app/",
    github: "https://github.com/MaheshMoholkar/ignite-plus-lms",
    description:
      "A comprehensive Learning Management System built with Next.js and modern web technologies. Features course management, user authentication with Better-Auth, payment integration with Razorpay, and a scalable architecture with Prisma, PostgreSQL, Redis, and AWS S3.",
    image: "/assets/projects/ignite-lms.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "2D Portfolio",
    link: "https://mahesh-me.vercel.app/",
    github: "https://github.com/MaheshMoholkar/mahesh.me",
    description:
      "A modern 2D portfolio website built with React, Next.js, and TailwindCSS. Features clean design, smooth animations with Framer Motion, and a professional layout showcasing skills and projects.",
    image: "/assets/projects/2d-portfolio.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Dark Blockchain SaaS Website",
    link: "https://blockforge-one.vercel.app/",
    github: "https://github.com/MaheshMoholkar/blockforge",
    description:
      "A blockchain SaaS landing page built with Astro.js and modern web technologies. Also includes blogs section.",
    image: "/assets/projects/blockforge.png",
    tags: ["React", "Astro.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "SaaS Landing Page",
    link: "https://light-productivity-app.vercel.app/",
    github: "https://github.com/MaheshMoholkar/landing-page-one",
    description:
      "A modern, responsive SaaS landing page built with React, Next.js, TailwindCSS & Framer Motion. Clean design with smooth animations and professional layout.",
    image: "/assets/projects/light-productivity.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Dark Theme SaaS Landing Page",
    link: "https://dark-productivity-app.vercel.app/",
    github: "https://github.com/MaheshMoholkar/landing-page-two",
    description:
      "A sophisticated dark-themed SaaS landing page with modern UI/UX design. Clean dark interface with smooth animations and professional layout.",
    image: "/assets/projects/dark-productivity.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "AI SEO Landing Page",
    link: "https://ai-seo-app-one.vercel.app/",
    github: "https://github.com/MaheshMoholkar/landing-page-three",
    description:
      "An AI-powered SEO landing page with modern design and user testimonials. Clean interface with smooth animations and professional layout.",
    image: "/assets/projects/ai-seo.png",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Cozy",
    link: "https://cozy-inky.vercel.app/",
    github: "https://github.com/MaheshMoholkar/cozy",
    description:
      "A modern interior design landing page built with React, Vite, and TailwindCSS. Elegant design with smooth animations and responsive layout.",
    image: "/assets/projects/cozy.png",
    tags: ["React", "Vite", "TypeScript", "TailwindCSS"],
  },
];
