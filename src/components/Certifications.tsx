import Title from "./Title";
import { Calendar, ExternalLink } from "lucide-react";
import imgSpecialization from "../assets/certifications/specialization-ai-ml.png";
import imgStatistics from "../assets/certifications/statistics-data-science.png";
import imgMachineLearning from "../assets/certifications/machine-learning-essentials.png";

const certifications = [
  {
    id: 1,
    name: "AI and Machine Learning Essentials with Python",
    issuer: "University of Pennsylvania · Coursera",
    date: "21 mai 2026",
    image: imgSpecialization,
    description:
      "Spécialisation en 4 cours : Artificial Intelligence Essentials, Statistics for Data Science Essentials, Machine Learning Essentials et Deep Learning Essentials. Python, IA, ML et deep learning.",
    credentialUrl:
      "https://coursera.org/verify/specialization/B17XAT837T0V",
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
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="mt-10 mb-10">
      <Title title="Mes Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col gap-3"
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg border border-base-content/10">
              <img
                src={cert.image}
                alt={`Certificat — ${cert.name}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-bold text-lg text-info">{cert.name}</h2>
              <p className="text-sm font-medium mt-1">{cert.issuer}</p>
            </div>
            <p className="text-sm">{cert.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-2">
              <span className="flex items-center gap-1 text-xs opacity-80">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info btn-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le certificat
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
