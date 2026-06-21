export type NavLinkItem = {
  to: string;
  label: string;
  isRoute?: boolean;
};

export const NAV_LINKS: NavLinkItem[] = [
  { to: "/#accueil", label: "Accueil" },
  { to: "/#about", label: "À propos" },
  { to: "/#experiences", label: "Expériences" },
  { to: "/#portfolio", label: "Portfolio" },
  { to: "/certifications", label: "Certifications", isRoute: true },
];

export const PROJECT_ROUTES = {
  development: "/projets/developpement",
  design: "/projets/design",
  designTcc: "/projets/design/tcc-esgis",
  designAelet: "/projets/design/aelet-esgis",
} as const;
