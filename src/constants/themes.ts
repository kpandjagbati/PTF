export type ThemeGroup = "dark" | "light";

export interface ThemeOption {
  id: string;
  label: string;
  group: ThemeGroup;
  /** Couleur d'aperçu pour le sélecteur */
  preview: string;
}

export const THEME_STORAGE_KEY = "aris-theme";

export const THEMES: ThemeOption[] = [
  { id: "night", label: "Night", group: "dark", preview: "#38bdf8" },
  { id: "dark", label: "Dark", group: "dark", preview: "#661ae6" },
  { id: "dim", label: "Dim", group: "dark", preview: "#9fe88d" },
  { id: "synthwave", label: "Synthwave", group: "dark", preview: "#e779c1" },
  { id: "cyberpunk", label: "Cyberpunk", group: "dark", preview: "#ff7598" },
  { id: "dracula", label: "Dracula", group: "dark", preview: "#ff79c6" },
  { id: "aqua", label: "Aqua", group: "dark", preview: "#09ecf3" },
  { id: "sunset", label: "Sunset", group: "dark", preview: "#ff865b" },
  { id: "luxury", label: "Luxury", group: "dark", preview: "#ffffff" },
  { id: "light", label: "Light", group: "light", preview: "#570df8" },
  { id: "winter", label: "Winter", group: "light", preview: "#047aed" },
  { id: "pastel", label: "Pastel", group: "light", preview: "#d1c1d7" },
];

export const DEFAULT_THEME = "night";

export const getThemeById = (id: string) =>
  THEMES.find((t) => t.id === id) ?? THEMES[0];
