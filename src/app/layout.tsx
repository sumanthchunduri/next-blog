import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
} from "@/constants";
import Header from "@/components/Header/Header";
import RespectMotionPreferences from "@/components/RespectMotionPreference";
import { ViewTransitions } from "next-view-transitions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog application built with next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedTheme = (await cookies()).get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "light";
  return (
    <ViewTransitions>
      <RespectMotionPreferences>
        <html
          lang="en"
          data-color-theme={theme}
          className={theme}
          style={
            (theme === "light"
              ? LIGHT_TOKENS
              : DARK_TOKENS) as React.CSSProperties
          }
        >
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header initialTheme={theme} />
            {children}
          </body>
        </html>
      </RespectMotionPreferences>
    </ViewTransitions>
  );
}
