"use client";
import React from "react";
import clsx from "clsx";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import { motion, AnimatePresence } from "motion/react";

import {
  COLOR_THEME_COOKIE_NAME,
  LIGHT_TOKENS,
  DARK_TOKENS,
} from "@/constants";

import Logo from "@/components/Logo/Logo";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

import styles from "./Header.module.css";

function Header({
  initialTheme,
  className,
  ...delegated
}: {
  initialTheme: string;
  className?: string;
}) {
  const [theme, setTheme] = React.useState(initialTheme);

  const lightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  };

  // Variants for the dark theme icon (Moon).
  // It always enters from the left and exits to the left.
  const darkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(newTheme);
    setTheme(newTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    });

    const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute("data-color-theme", newTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div
        className={`${styles.actions} w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900`}
      >
        <button className={styles.action} onClick={handleToggleTheme}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={theme === "light" ? lightVariants : darkVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {theme === "light" ? (
                <Sun size="1.5rem" />
              ) : (
                <Moon size="1.5rem" />
              )}
              <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}

export default Header;
