import Image from "next/image";
import solidIcons from "@/components/icons/solid";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-4 rounded-3xl border border-gray-800 p-5 shadow-lg sm:p-6">
      {/* Project Image */}
      <figure
        style={{ backgroundImage: "radial-gradient(circle, #3f5585, #13162d)", aspectRatio: "2/1" }}
        className="relative flex w-full justify-center overflow-hidden rounded-xl"
      >
        <div className="relative mx-6 mt-2 h-full w-full">
          <Image src={project.img} alt={project.title} fill className="rotate-3 rounded-md object-cover shadow" />
        </div>
      </figure>

      <div className="flex flex-col gap-2">
        {/* Project Title */}
        <h3 className="text-xl font-extrabold text-gray-100">{project.title}</h3>

        {/* Project Description */}
        <p className="text-xs text-gray-400 sm:text-sm md:text-base" style={{ lineHeight: 1.8 }}>
          {project.description}
        </p>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4">
        {/* Technologies */}
        <div className="flex items-center">
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
            className="flex items-center gap-2 text-sm text-purple-300 transition-colors hover:text-purple-400"
          >
            Check Live Site <solidIcons.ExternalLink />
          </a>
        )}
      </footer>
    </div>
  );
}
