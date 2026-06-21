import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, X } from "lucide-react";
import { THEMES, type ThemeGroup } from "../constants/themes";
import { useTheme } from "../hooks/useTheme";

const groups: { id: ThemeGroup; label: string }[] = [
  { id: "dark", label: "Thèmes sombres" },
  { id: "light", label: "Thèmes clairs" },
];

const ThemeSettings = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="btn btn-primary btn-circle fixed bottom-6 left-6 z-40 shadow-lg shadow-primary/30"
        aria-label="Réglages de couleur"
        aria-expanded={open}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Palette className="h-5 w-5" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />

            <motion.div
              role="dialog"
              aria-labelledby="theme-settings-title"
              className="fixed bottom-20 left-4 right-4 md:left-6 md:right-auto md:w-80 z-50 rounded-2xl border border-base-content/10 bg-base-200 p-5 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 id="theme-settings-title" className="font-bold text-lg">
                  Couleurs du site
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn btn-ghost btn-sm btn-circle"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-sm text-base-content/70 mb-4">
                Choisis un thème — ton choix est sauvegardé automatiquement.
              </p>

              {groups.map((group) => (
                <div key={group.id} className="mb-4 last:mb-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50 mb-2">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {THEMES.filter((t) => t.group === group.id).map((t) => {
                      const active = theme === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTheme(t.id)}
                          className={`flex flex-col items-center gap-1.5 rounded-xl p-2 transition-all ${
                            active
                              ? "bg-base-100 ring-2 ring-primary scale-105 shadow-md"
                              : "hover:bg-base-100/60"
                          }`}
                          aria-pressed={active}
                          aria-label={`Thème ${t.label}`}
                        >
                          <span
                            className="h-8 w-8 rounded-full border-2 border-base-content/10 shadow-inner"
                            style={{ backgroundColor: t.preview }}
                          />
                          <span className="text-[10px] font-medium leading-tight text-center">
                            {t.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSettings;
