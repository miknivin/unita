import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans, Glass_Antiqua } from "next/font/google";
import "./globals.scss";
import ReduxProvider from "./redux-provider";
import MagicCursor from "@/components/magic-cursor/magic-cursor";

const glossAndBloom = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gloss_and_bloom_font.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--it-ff-gloss",
});

const dmSans = DM_Sans({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--it-ff-primary",
});

const glassAntiqua = Glass_Antiqua({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--it-ff-glass",
});

export const metadata: Metadata = {
  title: "UNITAG",
  description: "Bringing your vision to life with quality, efficiency, and expertise.",
  icons: {
    icon: "/favicon.ico", // Ensure this file exists in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${dmSans.variable} ${glassAntiqua.variable} ${glossAndBloom.variable}`}
      >
        <ReduxProvider>
          <MagicCursor />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
