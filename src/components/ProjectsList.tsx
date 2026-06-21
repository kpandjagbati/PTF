import { ExternalLink, Github } from "lucide-react";
import { BlurFade } from "./ui/blur-fade";
import type { Project } from "../constants/projects";

interface ProjectsListProps {
  projects: Project[];
  variant?: "development" | "design";
}

const ProjectsList = ({ projects, variant = "development" }: ProjectsListProps) => {
  if (projects.length === 0) {
    return (
      <p className="text-center text-base-content/60 py-12">
        Aucun projet dans cette catégorie pour le moment.
      </p>
    );
  }

  const isDesign = variant === "design";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <BlurFade key={project.id} inView delay={index * 0.08} direction="up">
          <article className="card-hover bg-base-300 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
          <div className={`overflow-hidden ${isDesign ? "bg-base-100" : ""}`}>
            <img
              src={project.image}
              alt={project.name}
              className={`w-full transition-transform duration-500 hover:scale-105 ${
                isDesign
                  ? "aspect-[3/4] sm:aspect-[4/5] object-contain object-center p-2 max-h-72 sm:max-h-80"
                  : "h-44 sm:h-52 object-cover"
              }`}
            />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-base sm:text-lg min-w-0 break-words">{project.name}</h3>
              {project.status && (
                <span className="badge badge-warning badge-sm shrink-0">{project.status}</span>
              )}
            </div>
            <p className="text-sm text-base-content/75 mt-2 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`badge badge-sm ${isDesign ? "badge-secondary" : "badge-primary"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              {project.demoLink && (
                <a
                  className="btn btn-info btn-sm flex items-center gap-1"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </a>
              )}
              {project.repoLink && (
                <a
                  className="btn btn-ghost btn-sm flex items-center gap-1"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
          </article>
        </BlurFade>
      ))}
    </div>
  );
};

export default ProjectsList;
