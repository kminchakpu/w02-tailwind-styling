import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-play",
});

export const metadata: Metadata = {
  title: "Tailwind CSS Practice",
  description: "A Next.js Tailwind CSS styling practice project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={play.variable}>
      <body>{children}</body>
    </html>
  );
}