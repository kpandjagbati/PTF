import { useCallback, useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, getThemeById } from "../constants/themes";

export function applyTheme(themeId: string) {
  const theme = getThemeById(themeId);
  document.documentElement.setAttribute("data-theme", theme.id);
  localStorage.setItem(THEME_STORAGE_KEY, theme.id);
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return localStorage.getItem(THEME_STORAGE_KEY) ?? DEFAULT_THEME;
  });

  const setTheme = useCallback((themeId: string) => {
    const resolved = getThemeById(themeId).id;
    setThemeState(resolved);
    applyTheme(resolved);
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
