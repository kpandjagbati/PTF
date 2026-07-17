import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Boxes, Menu, X } from "lucide-react";
import { BlurFade } from "./ui/blur-fade";
import { NAV_LINKS } from "../constants/navigation";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <BlurFade delay={0.1} duration={0.5}>
      <div className="navbar relative sticky top-0 z-50 mb-2 bg-base-100/85 backdrop-blur-lg border-b border-base-content/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 min-h-16">
        <div className="navbar-start">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="min-w-0">
            <Link
              to="/"
              className="btn btn-ghost text-xl sm:text-2xl lg:text-3xl font-bold px-1 sm:px-2"
              onClick={closeMenu}
            >
              <motion.span
                animate={{ rotate: [0, 0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex shrink-0"
              >
                <Boxes className="text-primary" />
              </motion.span>
              Aris <span className="text-primary">.Dev</span>
            </Link>
          </motion.div>
        </div>

        <div className="navbar-end gap-1">
          <ul className="menu menu-horizontal hidden lg:flex items-center px-1">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="nav-link-glow">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="dropdown dropdown-end lg:hidden">
            <button
              type="button"
              tabIndex={0}
              className="btn btn-ghost btn-square"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden absolute left-0 right-0 top-full bg-base-100 border-b border-base-content/10 overflow-hidden transition-all duration-300",
            menuOpen
              ? "max-h-[calc(100dvh-5rem)] opacity-100 shadow-lg"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <ul className="menu menu-lg w-full p-2">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BlurFade>
  );
};

export default Navbar;
