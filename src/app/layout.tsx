import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/holographic.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COMET Scanner Wizard",
  description:
    "Co-Integrated Observational Market Evaluation Tool - Template Builder Wizard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="_a0-v3y">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased futuristic-theme`}
        data-oid="wsf0fzu"
      >
        {children}
      </body>
    </html>
  );
}
