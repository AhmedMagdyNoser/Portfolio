import ProjectCard from "@/components/project-card";
import { technologies } from "@/lib/constants";

const projects: Project[] = [
  {
    title: "Leopard Online Store",
    description:
      "Fashion collections for men and women, blending elegance and modern trends with quality craftsmanship to showcase your unique style.",
    img: "/imgs/projects/leopard.png",
    technologies: [technologies.Vite, technologies.TS, technologies.React, technologies.Tailwind],
    liveDome: "https://leopardegy.com",
  },
  {
    title: "Pro Sales CRM",
    description:
      "A CRM platform that simplifies sales, optimizes customer management, and increases productivity with lead tracking, automation, and analytics.",
    img: "/imgs/projects/pro-sales.jpg",
    technologies: [technologies.Vite, technologies.JS, technologies.React, technologies.Tailwind],
    liveDome: "https://ahmedmagdynoser.github.io/Pro-Sales",
  },
];

export default function ProjectsSection({ className = "" }: { className?: string }) {
  return (
    <section id="projects" className={`section ${className}`}>
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-50">
          A small selection of <span className="text-purple-300">recent projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
