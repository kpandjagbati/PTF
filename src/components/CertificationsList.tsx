import { useState } from "react";
import { Calendar, ExternalLink, Award, X, GraduationCap } from "lucide-react";
import { BlurFade } from "./ui/blur-fade";
import { certifications, CERTIFICATION_ISSUER, type Certification } from "../constants/certifications";

const CertificationsList = () => {
  const [preview, setPreview] = useState<Certification | null>(null);

  const specialization = certifications.find((cert) => cert.type === "specialization");
  const courses = certifications.filter((cert) => cert.type === "course");

  return (
    <>
      <BlurFade inView delay={0.05} direction="up">
        <div className="mb-10 rounded-2xl border border-info/20 bg-base-300 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-info/15 text-info">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-medium text-info">{CERTIFICATION_ISSUER}</p>
                <h2 className="mt-1 text-xl font-bold">Intelligence Artificielle & Machine Learning</h2>
                <p className="mt-2 text-sm text-base-content/70 max-w-xl">
                  Parcours certifiant en Python, statistiques, machine learning et deep learning.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="rounded-xl bg-base-100 px-5 py-3 text-center border border-base-content/10">
                <p className="text-2xl font-bold text-info">{certifications.length}</p>
                <p className="text-xs text-base-content/60">Certificats</p>
              </div>
              <div className="rounded-xl bg-base-100 px-5 py-3 text-center border border-base-content/10">
                <p className="text-2xl font-bold text-info">1</p>
                <p className="text-xs text-base-content/60">Spécialisation</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {specialization && (
        <BlurFade inView delay={0.1} direction="up" className="mb-8">
          <CertificationCard
            cert={specialization}
            featured
            onPreview={() => setPreview(specialization)}
          />
        </BlurFade>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-info">Cours complétés</h3>
        <p className="text-sm text-base-content/60 mt-1">
          Certificats individuels inclus dans la spécialisation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((cert, index) => (
          <BlurFade key={cert.id} inView delay={0.15 + index * 0.1} direction="up">
            <CertificationCard cert={cert} onPreview={() => setPreview(cert)} />
          </BlurFade>
        ))}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/70 p-4 pt-12 sm:pt-4 backdrop-blur-sm overflow-y-auto"
          onClick={() => setPreview(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] max-w-4xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label={`Aperçu — ${preview.name}`}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="btn btn-circle btn-sm absolute top-2 right-2 sm:-top-3 sm:-right-3 z-10 bg-base-100 shadow-md"
              aria-label="Fermer l'aperçu"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={preview.image}
              alt={preview.name}
              className="max-h-[85vh] w-full rounded-xl object-contain bg-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

interface CertificationCardProps {
  cert: Certification;
  featured?: boolean;
  onPreview: () => void;
}

const CertificationCard = ({ cert, featured = false, onPreview }: CertificationCardProps) => {
  return (
    <article
      className={`card-hover flex flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-300 shadow-lg ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <button
        type="button"
        onClick={onPreview}
        className={`group relative overflow-hidden bg-white text-left ${
          featured ? "lg:w-2/5 shrink-0" : "w-full"
        }`}
        aria-label={`Agrandir le certificat ${cert.name}`}
      >
        <img
          src={cert.image}
          alt={`Certificat — ${cert.name}`}
          className={`w-full object-contain object-top transition-transform duration-500 group-hover:scale-105 ${
            featured ? "h-64 lg:h-full min-h-56" : "h-56"
          }`}
        />
        <div className="absolute inset-0 bg-info/0 group-hover:bg-info/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-base-100/90 px-3 py-1 rounded-full">
            Agrandir
          </span>
        </div>
      </button>

      <div className={`flex flex-col flex-1 p-5 md:p-6 ${featured ? "lg:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`badge badge-sm ${
              cert.type === "specialization" ? "badge-info" : "badge-primary"
            }`}
          >
            {cert.type === "specialization" ? (
              <>
                <Award className="w-3 h-3 mr-1" />
                Spécialisation
              </>
            ) : (
              "Cours"
            )}
          </span>
          <span className="flex items-center gap-1 text-xs text-base-content/60">
            <Calendar className="w-3.5 h-3.5" />
            {cert.date}
          </span>
        </div>

        <h2 className={`font-bold text-info leading-snug ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
          {cert.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-base-content/80">{cert.issuer}</p>
        <p className="mt-3 text-sm leading-relaxed text-base-content/75 flex-1">{cert.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {cert.skills.map((skill) => (
            <span key={skill} className="badge badge-outline badge-sm">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-base-content/10">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-sm gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Vérifier sur Coursera
          </a>
        </div>
      </div>
    </article>
  );
};

export default CertificationsList;
