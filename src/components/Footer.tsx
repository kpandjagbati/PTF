import { Link } from "react-router-dom";
import { Box, Linkedin, Github, Mail } from "lucide-react";
import { CONTACT, mailtoLink } from "../constants/contact";
import { NAV_LINKS } from "../constants/navigation";

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content border-t border-base-content/10 px-4 py-8 sm:p-10 mt-10">
      <aside className="flex flex-col items-center gap-2">
        <Box className="w-10 h-10 text-primary" />
        <p className="font-bold text-xl">
          Aris <span className="text-primary">.Dev</span>
        </p>
        <a href={mailtoLink} className="link link-hover link-primary text-sm">
          {CONTACT.email}
        </a>
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Aristide KPANDJA — Tous droits réservés
        </p>
      </aside>

      <nav aria-label="Navigation pied de page">
        <div className="grid grid-flow-col gap-4">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="link link-hover text-sm">
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <nav aria-label="Réseaux sociaux">
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col gap-2">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={mailtoLink}
              className="btn btn-ghost btn-circle"
              aria-label="Envoyer un email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <button type="button" onClick={onContactClick} className="btn btn-primary btn-sm">
            Me contacter
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
