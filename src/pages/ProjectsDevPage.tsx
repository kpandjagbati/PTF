import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Title from "../components/Title";
import ProjectsList from "../components/ProjectsList";
import { BlurFade } from "../components/ui/blur-fade";
import { getProjectsByCategory } from "../constants/projects";
import { PROJECT_ROUTES } from "../constants/navigation";

const ProjectsDevPage = () => {
  const projects = getProjectsByCategory("development");

  return (
    <div className="py-8">
      <BlurFade delay={0.05}>
        <Link to="/#portfolio" className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>
      </BlurFade>

      <Title title="Projets — Développement" />

      <div className="mb-8 flex flex-wrap gap-2">
        <span className="badge badge-primary">Développement</span>
        <Link to={PROJECT_ROUTES.design} className="btn btn-ghost btn-sm">
          Voir Design →
        </Link>
      </div>

      <ProjectsList projects={projects} />
    </div>
  );
};

export default ProjectsDevPage;
