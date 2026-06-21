import { Link } from 'react-router-dom';
import { Box, Linkedin, Github, Mail } from 'lucide-react';
import { CONTACT, mailtoLink } from '../constants/contact';
import { NAV_LINKS } from '../constants/navigation';

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="footer footer-center bg-base-300 border-t border-base-content/10 p-10 mt-10">
      <aside className="flex flex-col items-center gap-2">
        <Box className="w-10 h-10 text-info" />
        <p className="font-bold text-xl">
          Aris <span className="text-info">.Dev</span>
        </p>
        <a href={mailtoLink} className="link link-hover text-sm">
          {CONTACT.email}
        </a>
        <p className="text-sm text-base-content/60">
          © {new Date().getFullYear()} Aristide KPANDJA — Tous droits réservés
        </p>
      </aside>

      <nav aria-label="Navigation pied de page">
        <ul className="flex flex-wrap justify-center gap-2">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="link link-hover text-sm">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Réseaux sociaux">
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-flow-col gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={mailtoLink}
              className="btn btn-ghost btn-circle hover:scale-110 transition-transform"
              aria-label="Envoyer un email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="btn btn-primary btn-sm"
          >
            Me contacter
          </button>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

