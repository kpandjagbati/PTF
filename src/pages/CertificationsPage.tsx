import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Title from "../components/Title";
import CertificationsList from "../components/CertificationsList";
import { BlurFade } from "../components/ui/blur-fade";

const CertificationsPage = () => {
  return (
    <div className="py-8">
      <BlurFade delay={0.05}>
        <Link to="/#portfolio" className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Retour au portfolio
        </Link>
      </BlurFade>

      <Title title="Mes Certifications" />
      <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-10 -mt-4">
        Certifications professionnelles obtenues sur Coursera, avec l&apos;Université de Pennsylvanie.
      </p>
      <CertificationsList />
    </div>
  );
};

export default CertificationsPage;
