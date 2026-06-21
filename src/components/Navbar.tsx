import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Boxes, Menu, X } from "lucide-react";import { BlurFade } from "./ui/blur-fade";
import { NAV_LINKS } from "../constants/navigation";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <BlurFade delay={0.1} duration={0.5}>
      <header className="sticky top-0 z-50 -mx-5 px-5 md:-mx-[15%] md:px-[15%] py-3 mb-2 bg-base-100/85 backdrop-blur-lg border-b border-base-content/10">
        <nav className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center font-bold text-2xl md:text-3xl"
              onClick={closeMenu}
            >
              <motion.span
                animate={{ rotate: [0, 0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <Boxes className="mr-2 text-info" />
              </motion.span>
              Aris <span className="text-info">.Dev</span>
            </Link>
          </motion.div>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link to={to} className="btn btn-sm btn-ghost nav-link-glow">
                    {label}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-ghost btn-square md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            menuOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-1 pb-2">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="btn btn-ghost justify-start w-full"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </BlurFade>
  );
};

export default Navbar;
