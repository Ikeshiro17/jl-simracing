import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JL Simracing",
  description:
    "Immersion cockpit inspirée GT3, endurance et motorsport moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}