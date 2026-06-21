import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Code2, Palette, ArrowRight } from "lucide-react";
import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";
import { certifications } from "../constants/certifications";
import { getProjectsByCategory } from "../constants/projects";
import { PROJECT_ROUTES } from "../constants/navigation";

const devCount = getProjectsByCategory("development").length;

const PortfolioHub = () => {
  return (
    <section id="portfolio" className="section-spacing mt-10 mb-16">
      <Title title="Certifications & Projets" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BlurFade inView delay={0.1} direction="up">
          <Link
            to="/certifications"
            className="card-hover group flex h-full min-h-64 flex-col justify-between rounded-2xl border border-info/20 bg-base-300 p-6 md:p-8 shadow-lg"
          >
            <div>
              <motion.div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-info/15 text-info"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Award className="h-7 w-7" />
              </motion.div>
              <h2 className="text-2xl font-bold text-info">Mes Certifications</h2>
              <p className="mt-3 text-sm leading-relaxed text-base-content/75">
                {certifications.length} certificats en intelligence artificielle, machine learning
                et science des données — University of Pennsylvania · Coursera.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-info group-hover:gap-3 transition-all">
              Voir toutes les certifications
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4">
          <BlurFade inView delay={0.2} direction="up">
            <Link
              to={PROJECT_ROUTES.development}
              className="card-hover group flex min-h-48 flex-col justify-between rounded-2xl border border-primary/20 bg-base-300 p-6 shadow-lg"
            >
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Développement</h2>
                <p className="mt-2 text-sm text-base-content/75">
                  {devCount} projets web — React, Node.js, TypeScript et applications full-stack.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Voir les projets
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </BlurFade>

          <BlurFade inView delay={0.3} direction="up">
            <Link
              to={PROJECT_ROUTES.design}
              className="card-hover group flex min-h-48 flex-col justify-between rounded-2xl border border-secondary/20 bg-base-300 p-6 shadow-lg"
            >
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Palette className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold">Design</h2>
                <p className="mt-2 text-sm text-base-content/75">
                  Rubriques TCC · ESGIS et AELET · ESGIS — affiches, UI/UX et identité visuelle.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:gap-3 transition-all">
                Voir les projets
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHub;
