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
    logoClassName: "object-contain bg-white p-1",
    ...DESIGN_GROUPS.tcc,
    count: getDesignProjectsByGroup("tcc").length,
  },
  {
    key: "aelet" as const,
    to: PROJECT_ROUTES.designAelet,
    logo: aeletLogo,
    logoClassName: "object-contain bg-white p-0.5 rounded-full",
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

      <div className="mb-8 flex flex-wrap gap-2">
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
            <Link
              to={rubric.to}
              className="card-hover group flex h-full min-h-56 flex-col rounded-2xl border border-base-content/10 bg-base-300 p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl ring-2 ring-info/25 bg-base-100">
                  <img
                    src={rubric.logo}
                    alt={rubric.title}
                    className={`h-full w-full ${rubric.logoClassName}`}
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-info">{rubric.title}</h2>
                  <p className="mt-1 text-xs text-base-content/60">{rubric.subtitle}</p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-base-content/75">
                {rubric.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:gap-3 transition-all">
                {rubric.count} visuel{rubric.count > 1 ? "s" : ""} — Voir la rubrique
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDesignPage;
