import imgSpecialization from "../assets/certifications/specialization-ai-ml.png";
import imgStatistics from "../assets/certifications/statistics-data-science.png";
import imgMachineLearning from "../assets/certifications/machine-learning-essentials.png";

export type CertificationType = "specialization" | "course";

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialUrl: string;
  type: CertificationType;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "AI and Machine Learning Essentials with Python",
    issuer: "University of Pennsylvania · Coursera",
    date: "21 mai 2026",
    image: imgSpecialization,
    description:
      "Spécialisation en 4 cours : Artificial Intelligence Essentials, Statistics for Data Science Essentials, Machine Learning Essentials et Deep Learning Essentials.",
    credentialUrl: "https://coursera.org/verify/specialization/B17XAT837T0V",
    type: "specialization",
    skills: ["Python", "IA", "Machine Learning", "Deep Learning"],
  },
  {
    id: 2,
    name: "Statistics for Data Science Essentials",
    issuer: "University of Pennsylvania · Coursera",
    date: "21 mai 2026",
    image: imgStatistics,
    description:
      "Fondamentaux des statistiques appliquées à la science des données, pilier de tout problème de machine learning.",
    credentialUrl: "https://coursera.org/verify/YTRO9MK1KQFA",
    type: "course",
    skills: ["Statistiques", "Data Science", "Python"],
  },
  {
    id: 3,
    name: "Machine Learning Essentials",
    issuer: "University of Pennsylvania · Coursera",
    date: "21 mai 2026",
    image: imgMachineLearning,
    description:
      "Concepts et outils essentiels du machine learning, avec mise en pratique en Python.",
    credentialUrl: "https://coursera.org/verify/92PQPPY5TO0I",
    type: "course",
    skills: ["Machine Learning", "Python", "Scikit-learn"],
  },
];

export const CERTIFICATION_ISSUER = "University of Pennsylvania · Coursera";
