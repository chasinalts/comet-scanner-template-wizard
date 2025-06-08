import type { Metadata } from "next";
import "./globals.css";
import "@/styles/holographic.css";
export const metadata: Metadata = {
  title: "COMET Scanner Wizard",
  description:
    "Co-Integrated Observational Market Evaluation Tool - Template Builder Wizard",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid="w06ykvh">
      <body className="antialiased futuristic-theme" data-oid="bmuhwyf">
        {children}
      </body>
    </html>
  );
}
