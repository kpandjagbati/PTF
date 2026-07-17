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
          <Link to="/certifications" className="card card-hover bg-base-200 shadow-md h-full min-h-64">
            <div className="card-body justify-between p-6 md:p-8">
              <div>
                <motion.div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-box bg-primary/15 text-primary"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-7 w-7" />
                </motion.div>
                <h2 className="card-title text-2xl text-primary">Mes Certifications</h2>
                <p className="mt-3 text-sm leading-relaxed text-base-content/75">
                  {certifications.length} certificats en intelligence artificielle, machine learning
                  et science des données — University of Pennsylvania · Coursera.
                </p>
              </div>
              <div className="card-actions mt-6">
                <span className="btn btn-link btn-primary no-underline gap-2 px-0 group-hover:gap-3">
                  Voir toutes les certifications
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4">
          <BlurFade inView delay={0.2} direction="up">
            <Link to={PROJECT_ROUTES.development} className="card card-hover bg-base-200 shadow-md min-h-48">
              <div className="card-body justify-between p-6">
                <div>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-box bg-secondary/15 text-secondary">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h2 className="card-title text-xl">Développement</h2>
                  <p className="mt-2 text-sm text-base-content/75">
                    {devCount} projets web — React, Node.js, TypeScript et applications full-stack.
                  </p>
                </div>
                <div className="card-actions mt-4">
                  <span className="btn btn-link btn-secondary no-underline gap-2 px-0">
                    Voir les projets
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </BlurFade>

          <BlurFade inView delay={0.3} direction="up">
            <Link to={PROJECT_ROUTES.design} className="card card-hover bg-base-200 shadow-md min-h-48">
              <div className="card-body justify-between p-6">
                <div>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-box bg-accent/15 text-accent">
                    <Palette className="h-6 w-6" />
                  </div>
                  <h2 className="card-title text-xl">Design</h2>
                  <p className="mt-2 text-sm text-base-content/75">
                    Rubriques TCC · ESGIS et AELET · ESGIS — affiches, UI/UX et identité visuelle.
                  </p>
                </div>
                <div className="card-actions mt-4">
                  <span className="btn btn-link btn-accent no-underline gap-2 px-0">
                    Voir les projets
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHub;
