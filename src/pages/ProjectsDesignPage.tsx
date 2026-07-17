import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Title from "../components/Title";
import { BlurFade } from "../components/ui/blur-fade";
import { DESIGN_GROUPS, getDesignProjectsByGroup } from "../constants/projects";
import { PROJECT_ROUTES } from "../constants/navigation";
import tccLogo from "../assets/companies/tcc-esgis.png";
import aeletLogo from "../assets/companies/aelet-esgis.png";

const rubrics = [
  {
    key: "tcc" as const,
    to: PROJECT_ROUTES.designTcc,
    logo: tccLogo,
    logoClassName: "object-contain bg-base-100 p-1",
    ...DESIGN_GROUPS.tcc,
    count: getDesignProjectsByGroup("tcc").length,
  },
  {
    key: "aelet" as const,
    to: PROJECT_ROUTES.designAelet,
    logo: aeletLogo,
    logoClassName: "object-contain bg-base-100 p-0.5 rounded-full",
    ...DESIGN_GROUPS.aelet,
    count: getDesignProjectsByGroup("aelet").length,
  },
];

const ProjectsDesignPage = () => {
  return (
    <div className="py-8">
      <BlurFade delay={0.05}>
        <Link to="/#portfolio" className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>
      </BlurFade>

      <Title title="Projets — Design" />

      <div className="mb-8 flex flex-wrap gap-2 items-center">
        <span className="badge badge-secondary">Design</span>
        <Link to={PROJECT_ROUTES.development} className="btn btn-ghost btn-sm">
          ← Voir Développement
        </Link>
      </div>

      <p className="mb-8 text-center text-base-content/70 max-w-2xl mx-auto">
        Choisissez une rubrique pour découvrir mes créations visuelles au sein des associations
        étudiantes de l&apos;ESGIS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {rubrics.map((rubric, index) => (
          <BlurFade key={rubric.key} inView delay={0.1 + index * 0.1} direction="up">
            <Link to={rubric.to} className="card card-hover bg-base-200 shadow-md h-full min-h-56">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="avatar">
                    <div className="w-16 rounded-box ring ring-primary/25 ring-offset-base-100 ring-offset-1">
                      <img
                        src={rubric.logo}
                        alt={rubric.title}
                        className={rubric.logoClassName}
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="card-title text-xl text-primary">{rubric.title}</h2>
                    <p className="mt-1 text-xs text-base-content/60">{rubric.subtitle}</p>
                  </div>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-base-content/75">
                  {rubric.description}
                </p>

                <div className="card-actions">
                  <span className="btn btn-link btn-secondary no-underline gap-2 px-0">
                    {rubric.count} visuel{rubric.count > 1 ? "s" : ""} — Voir la rubrique
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDesignPage;
