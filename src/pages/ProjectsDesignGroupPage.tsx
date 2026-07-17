import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectsList from "../components/ProjectsList";
import { BlurFade } from "../components/ui/blur-fade";
import {
  DESIGN_GROUPS,
  getDesignProjectsByGroup,
  type DesignGroup,
} from "../constants/projects";
import { PROJECT_ROUTES } from "../constants/navigation";
import tccLogo from "../assets/companies/tcc-esgis.png";
import aeletLogo from "../assets/companies/aelet-esgis.png";

const SLUG_TO_GROUP: Record<string, DesignGroup> = {
  "tcc-esgis": "tcc",
  "aelet-esgis": "aelet",
};

const GROUP_LOGOS: Partial<Record<DesignGroup, { src: string; className: string }>> = {
  tcc: { src: tccLogo, className: "object-contain bg-white p-1" },
  aelet: { src: aeletLogo, className: "object-contain bg-white p-0.5 rounded-full" },
};

const ProjectsDesignGroupPage = () => {
  const { rubric } = useParams<{ rubric: string }>();
  const group = rubric ? SLUG_TO_GROUP[rubric] : undefined;

  if (!group) {
    return (
      <div className="py-8 text-center">
        <p className="mb-4">Rubrique introuvable.</p>
        <Link to={PROJECT_ROUTES.design} className="btn btn-primary btn-sm">
          Retour au design
        </Link>
      </div>
    );
  }

  const meta = DESIGN_GROUPS[group as keyof typeof DESIGN_GROUPS];
  const projects = getDesignProjectsByGroup(group);
  const logo = GROUP_LOGOS[group];

  if (!meta || !logo) {
    return (
      <div className="py-8 text-center">
        <p className="mb-4">Rubrique introuvable.</p>
        <Link to={PROJECT_ROUTES.design} className="btn btn-primary btn-sm">
          Retour au design
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <BlurFade delay={0.05}>
        <Link to={PROJECT_ROUTES.design} className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Retour aux rubriques Design
        </Link>
      </BlurFade>

      <div className="mb-2 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-box ring-2 ring-primary/25 bg-base-100">
          <img src={logo.src} alt={meta.title} className={`h-full w-full ${logo.className}`} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-primary text-balance">{meta.title}</h1>
          <p className="mt-1 text-sm text-base-content/60">{meta.subtitle}</p>
        </div>
      </div>

      <p className="mb-8 text-base-content/75 max-w-3xl">{meta.description}</p>

      {projects.length > 0 ? (
        <ProjectsList projects={projects} variant="design" />
      ) : (
        <div className="rounded-box border border-dashed border-base-content/20 bg-base-200 p-12 text-center">
          <p className="text-base-content/60">
            Les visuels de cette rubrique seront bientôt disponibles.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsDesignGroupPage;
