import Title from "./Title";
import { BlurFade } from "./ui/blur-fade";
import SkillsMarquee from "./SkillsMarquee";
import imgCSS from "../assets/techno/css.png";
import imgHTML from "../assets/techno/html.png";
import imgJS from "../assets/techno/js.png";
import imgNodeJS from "../assets/techno/node-js.png";
import imgReact from "../assets/techno/react.png";
import imgTailwind from "../assets/techno/tailwind.png";
import imgTypeScript from "../assets/techno/typescript.svg";
import imgNextJS from "../assets/techno/next-js.webp";
import imgPrisma from "../assets/techno/prisma.webp";

import tccEsgis from "../assets/companies/tcc-esgis.png";
import aeletEsgis from "../assets/companies/aelet-esgis.png";
import ndc from "../assets/companies/NDC.jpeg";

const skills = [
  { id: 1, name: "HTML", level: "Avancé", image: imgHTML },
  { id: 2, name: "CSS", level: "Avancé", image: imgCSS },
  { id: 3, name: "JavaScript", level: "Avancé", image: imgJS },
  { id: 4, name: "TypeScript", level: "Intermédiaire", image: imgTypeScript },
  { id: 5, name: "React", level: "Avancé", image: imgReact },
  { id: 6, name: "Tailwind CSS", level: "Intermédiaire", image: imgTailwind },
  { id: 7, name: "Node.js", level: "Intermédiaire", image: imgNodeJS },
  { id: 8, name: "Next.js", level: "Intermédiaire", image: imgNextJS },
  { id: 9, name: "Prisma", level: "Intermédiaire", image: imgPrisma },
];

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Nimerum Dev",
    period: "Juillet 2025 — Septembre 2025",
    description: [
      "Développement et maintenance d'applications web avec React et Node.js.",
    ],
    image: ndc,
    logoClassName: "object-cover",
  },
  {
    id: 2,
    role: "Designer",
    company: "Club TCC · ESGIS",
    period: "2026 — Présent",
    description: [
      "Conception visuelle et création de supports pour le club TCC de l'ESGIS.",
      "Réalisation d'affiches événementielles, visuels webinar et contenus promotionnels.",
    ],
    image: tccEsgis,
    logoClassName: "object-contain bg-white p-1",
  },
  {
    id: 3,
    role: "Membre actif",
    company: "AELET · ESGIS",
    period: "2026 — Présent",
    description: [
      "Participation aux activités de l'association AELET au sein de l'ESGIS.",
      "Contribution aux projets et événements de la communauté étudiante.",
    ],
    image: aeletEsgis,
    logoClassName: "object-contain bg-white p-0.5 rounded-full",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="section-spacing mb-16">
      <Title title="Compétences & Expériences" />

      <div className="mb-12">
        <h2 className="text-lg font-semibold text-primary mb-8 text-center">
          Stack technique
        </h2>
        <BlurFade inView delay={0.1} direction="up">
          <SkillsMarquee skills={skills} />
        </BlurFade>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-primary mb-8 text-center md:text-left">
          Parcours professionnel
        </h2>

        <div className="relative max-w-4xl mx-auto md:mx-0">
          <div
            className="absolute left-[1.65rem] md:left-[1.875rem] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block"
            aria-hidden
          />

          <div className="flex flex-col gap-6">
            {experiences.map((experience, index) => (
              <BlurFade key={experience.id} inView delay={0.1 + index * 0.12} direction="left">
                <article className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 shrink-0 pt-1">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden rounded-box bg-base-100 shadow-lg ring-2 ring-primary/25">
                      {"image" in experience && experience.image ? (
                        <img
                          src={experience.image}
                          alt={experience.company}
                          className={`h-full w-full ${"logoClassName" in experience ? experience.logoClassName : "object-cover"}`}
                        />
                      ) : (
                        <span className="text-sm font-bold text-primary">
                          {"initials" in experience ? String(experience.initials) : "?"}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card card-hover min-w-0 flex-1 bg-base-200 shadow-md">
                    <div className="card-body p-5 md:p-6 gap-3">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <h3 className="card-title text-base sm:text-lg text-primary md:text-xl">
                          {experience.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-base-content/90 break-words">
                          {experience.company}
                        </p>
                      </div>
                      <time className="badge badge-outline badge-primary shrink-0 self-start text-xs sm:text-sm whitespace-normal sm:whitespace-nowrap max-w-full">
                        {experience.period}
                      </time>
                    </div>

                    <ul className="mt-2 space-y-2 border-t border-base-content/10 pt-4">
                      {experience.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-base-content/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
