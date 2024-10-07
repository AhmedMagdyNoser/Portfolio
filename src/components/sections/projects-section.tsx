import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  img: string;
  technologies: string[];
  liveDome?: string;
};

const projects: Project[] = [
  {
    title: "Leopard Online Store",
    description:
      "Leopard offers curated fashion collections for men and women, blending timeless elegance with modern trends. With a focus on quality and craftsmanship, each piece is designed to help you express your unique style.",
    img: "/imgs/projects/leopard.png",
    technologies: ["Vite", "TypeScript", "React", "Tailwind"],
    liveDome: "https://leopardegy.com",
  },
  {
    title: "Pro Sales CRM",
    description:
      "Pro Sales is a powerful CRM platform designed to streamline your sales process, manage customer relationships, and boost productivity. With intuitive tools for tracking leads, automating tasks, and analyzing performance, Pro Sales helps businesses close deals faster and grow efficiently.",
    img: "/imgs/projects/pro-sales.jpg",
    technologies: ["Vite", "JavaScript", "React", "Tailwind"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-[#000310]">
      <div className="container">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-50">
          A small selection of <span className="text-purple-300">recent projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-[#111827] p-6">
              {/* Project Image */}
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="mb-4 rounded-lg object-cover"
              />

              {/* Project Title */}
              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>

              {/* Project Description */}
              <p className="mb-4 text-sm text-gray-400">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4 flex space-x-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="rounded bg-gray-700 px-2 py-1 text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Site Button */}
              {project.liveDome && (
                <a
                  href={project.liveDome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm text-purple-300 hover:underline"
                >
                  Check Live Site <FiExternalLink className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
