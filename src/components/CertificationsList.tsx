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
        <div className="card bg-base-200 shadow-md mb-10">
          <div className="card-body p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-box bg-primary/15 text-primary">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{CERTIFICATION_ISSUER}</p>
                  <h2 className="card-title mt-1 text-xl">Intelligence Artificielle & Machine Learning</h2>
                  <p className="mt-2 text-sm text-base-content/70 max-w-xl">
                    Parcours certifiant en Python, statistiques, machine learning et deep learning.
                  </p>
                </div>
              </div>
              <div className="stats stats-horizontal shadow bg-base-100">
                <div className="stat place-items-center px-5 py-3">
                  <div className="stat-value text-2xl text-primary">{certifications.length}</div>
                  <div className="stat-desc">Certificats</div>
                </div>
                <div className="stat place-items-center px-5 py-3">
                  <div className="stat-value text-2xl text-primary">1</div>
                  <div className="stat-desc">Spécialisation</div>
                </div>
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
        <h3 className="text-lg font-semibold text-primary">Cours complétés</h3>
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
        <dialog className="modal modal-open" onClick={() => setPreview(null)}>
          <div
            className="modal-box max-w-4xl w-full p-2 sm:p-4 bg-transparent shadow-none"
            onClick={(e) => e.stopPropagation()}
          >
            <form method="dialog">
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-base-100"
                aria-label="Fermer l'aperçu"
              >
                <X className="h-4 w-4" />
              </button>
            </form>
            <img
              src={preview.image}
              alt={preview.name}
              className="max-h-[85vh] w-full rounded-box object-contain bg-base-100 shadow-2xl"
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button type="button" onClick={() => setPreview(null)}>
              close
            </button>
          </form>
        </dialog>
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
      className={`card card-hover bg-base-200 shadow-md overflow-hidden ${
        featured ? "lg:card-side" : ""
      }`}
    >
      <figure
        className={`bg-base-100 ${featured ? "lg:w-2/5 shrink-0" : "w-full"}`}
      >
        <button
          type="button"
          onClick={onPreview}
          className="group relative w-full text-left"
          aria-label={`Agrandir le certificat ${cert.name}`}
        >
          <img
            src={cert.image}
            alt={`Certificat — ${cert.name}`}
            className={`w-full object-contain object-top transition-transform duration-500 group-hover:scale-105 ${
              featured ? "h-64 lg:h-full min-h-56" : "h-56"
            }`}
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
            <span className="badge badge-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Agrandir
            </span>
          </div>
        </button>
      </figure>

      <div className={`card-body p-5 md:p-6 ${featured ? "lg:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`badge badge-sm ${
              cert.type === "specialization" ? "badge-primary" : "badge-secondary"
            }`}
          >
            {cert.type === "specialization" ? (
              <>
                <Award className="w-3 h-3" />
                Spécialisation
              </>
            ) : (
              "Cours"
            )}
          </span>
          <span className="badge badge-ghost badge-sm gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {cert.date}
          </span>
        </div>

        <h2 className={`card-title text-primary leading-snug ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
          {cert.name}
        </h2>
        <p className="text-sm font-medium text-base-content/80">{cert.issuer}</p>
        <p className="text-sm leading-relaxed text-base-content/75 flex-1">{cert.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span key={skill} className="badge badge-outline badge-sm">
              {skill}
            </span>
          ))}
        </div>

        <div className="card-actions mt-2">
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm gap-2"
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
