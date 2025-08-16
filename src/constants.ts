export const BLOG_TITLE = "Blog";
export const COLOR_THEME_COOKIE_NAME = "color-theme";
export const LIGHT_COLORS: Record<string, string> = {
  "--color-selection-background": "var(--iris-11)",
  "--color-selection-text": "var(--iris-12)",
};

export const DARK_COLORS: Record<string, string> = {
  "--color-selection-background": "var(--iris-11)",
  "--color-selection-text": "var(--iris-12)"
};

export const LIGHT_SHADOWS = {
  "--shadow-page": `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  "--shadow-card": `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
