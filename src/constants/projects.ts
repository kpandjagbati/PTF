import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import saasLanding from "../assets/projects/saas-landing.png";
import project4 from "../assets/projects/project4.jpg";
import xogga from "../assets/projects/xogga.png";
import tccDigitalManager from "../assets/projects/design/tcc-digital-manager.png";
import tccDevopsEngineer from "../assets/projects/design/tcc-devops-engineer.png";
import tccPromptEngineering from "../assets/projects/design/tcc-prompt-engineering.png";
import aelet8Mars from "../assets/projects/design/aelet/8-mars-femmes.png";
import aeletFormationExcel from "../assets/projects/design/aelet/formation-excel.png";

export type ProjectCategory = "development" | "design";
export type DesignGroup = "tcc" | "aelet" | "personal";

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  designGroup?: DesignGroup;
  demoLink?: string;
  repoLink?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: 12,
    name: "Xogga — Facturation",
    image: xogga,
    description:
      "Application web de gestion de facturation : clients, factures HT / TVA / TTC, export PDF & Excel, profil entreprise et dashboard admin.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind CSS"],
    category: "development",
    demoLink: "https://xogga.vercel.app/",
    repoLink: "https://github.com/kpandjagbati/XOGGA",
  },
  {
    id: 1,
    name: "Web App TimeTable",
    image: project1,
    description: "Application responsive pour créer et gérer un emploi du temps hebdomadaire.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "development",
    demoLink: "https://aris-dev-table.netlify.app/login_page",
    repoLink: "https://github.com/GOAT-12/cr-ateur-d-emploi-du-temps",
  },
  {
    id: 2,
    name: "Travel Website",
    image: project2,
    description: "Site vitrine moderne mettant en avant destinations et offres de voyage.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "development",
    demoLink: "https://site-voyage-arisdev.netlify.app/login.html?redirect=goat.html",
    repoLink: "https://github.com/GOAT-12/git-test",
  },
  {
    id: 3,
    name: "LanchLy — SaaS Landing",
    image: saasLanding,
    description:
      "Landing page SaaS avec navigation, tarification mensuelle/annuelle et offres Starter, Pro et Enterprise.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "design",
    designGroup: "personal",
    repoLink: "https://github.com/kpandjagbati/Saas_Landing",
  },
  {
    id: 7,
    name: "TCC — Digital & Community Manager",
    image: tccDigitalManager,
    description:
      "Affiche événementielle pour le Tech Campus Club ESGIS : « C'est quoi un Digital Manager et un Community Manager ? » — 11 mars 2026.",
    technologies: ["Canva", "Design graphique"],
    category: "design",
    designGroup: "tcc",
  },
  {
    id: 8,
    name: "TCC — Software Engineer & DevOps",
    image: tccDevopsEngineer,
    description:
      "Visuel promotionnel TCC sur le rôle du Software Engineer à l'ère DevOps, avec Julien KOLOU — événement du 9 mai 2026 à ESGIS Avedji.",
    technologies: ["Canva", "Design graphique"],
    category: "design",
    designGroup: "tcc",
  },
  {
    id: 9,
    name: "TCC — Prompt Engineering",
    image: tccPromptEngineering,
    description:
      "Affiche webinar TCC sur le prompt engineering et les outils du métier, avec Leonel ADAGBE — 21 mars 2026.",
    technologies: ["Canva", "Design graphique"],
    category: "design",
    designGroup: "tcc",
  },
  {
    id: 10,
    name: "AELET — 8 Mars · Journée des femmes",
    image: aelet8Mars,
    description:
      "Affiche pour la Journée internationale des droits de la femme — « Droit · Justice · Action pour toutes les femmes et les filles » — AELET ESGIS Togo.",
    technologies: ["Canva", "Design graphique"],
    category: "design",
    designGroup: "aelet",
  },
  {
    id: 11,
    name: "AELET — Formation Excel (Gestion de stock)",
    image: aeletFormationExcel,
    description:
      "Visuel promotionnel pour la formation Excel en gestion de stock, avec Yao Kévin Tossa — 22 avril 2026 à ESGIS Adidogomé.",
    technologies: ["Canva", "Design graphique"],
    category: "design",
    designGroup: "aelet",
  },
  {
    id: 4,
    name: "Portfolio Aris.Dev",
    image: project4,
    description: "Mon portfolio développeur avec React, TypeScript, Tailwind CSS et animations Framer Motion.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "development",
    repoLink: "https://github.com/kpandjagbati/PTF",
  },
];

export const getProjectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category);

export const getDesignProjectsByGroup = (group: DesignGroup) =>
  projects.filter((project) => project.category === "design" && project.designGroup === group);

export const DESIGN_GROUPS = {
  tcc: {
    slug: "tcc-esgis",
    title: "TCC · ESGIS",
    subtitle: "Tech Campus Club — École Supérieure de Gestion, Informatique et Sciences",
    description:
      "Affiches événementielles, visuels webinar et supports promotionnels pour le club TCC.",
  },
  aelet: {
    slug: "aelet-esgis",
    title: "AELET · ESGIS",
    subtitle: "Association des Étudiants en Logistique et Transport",
    description:
      "Créations visuelles et supports de communication pour l'association AELET.",
  },
} as const;
