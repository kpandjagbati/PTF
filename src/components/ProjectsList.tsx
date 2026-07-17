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
      <div className="alert alert-info">
        <span>Aucun projet dans cette catégorie pour le moment.</span>
      </div>
    );
  }

  const isDesign = variant === "design";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <BlurFade key={project.id} inView delay={index * 0.08} direction="up">
          <article className="card card-hover bg-base-200 shadow-md overflow-hidden h-full">
            <figure className={isDesign ? "bg-base-100" : undefined}>
              <img
                src={project.image}
                alt={project.name}
                className={`w-full transition-transform duration-500 hover:scale-105 ${
                  isDesign
                    ? "aspect-[3/4] sm:aspect-[4/5] object-contain object-center p-2 max-h-72 sm:max-h-80"
                    : "h-44 sm:h-52 object-cover"
                }`}
              />
            </figure>
            <div className="card-body p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="card-title text-base sm:text-lg min-w-0 break-words">{project.name}</h3>
                {project.status && (
                  <span className="badge badge-warning badge-sm shrink-0">{project.status}</span>
                )}
              </div>
              <p className="text-sm text-base-content/75 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`badge badge-sm ${isDesign ? "badge-secondary" : "badge-primary"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-actions justify-start mt-1">
                {project.demoLink && (
                  <a
                    className="btn btn-primary btn-sm gap-1"
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
                    className="btn btn-outline btn-neutral btn-sm gap-1"
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
