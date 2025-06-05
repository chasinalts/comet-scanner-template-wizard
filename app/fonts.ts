import { Anuphan } from "next/font/google";
export const anuphan = Anuphan({
  subsets: ["cyrillic-ext", "latin", "latin-ext", "thai", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-anuphan",
  display: "swap",
});
