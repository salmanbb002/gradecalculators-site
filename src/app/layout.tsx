import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gradecalculators.site"),
  title: "Grade Calculator — Free Easy Grader & Grade Chart | Grade calcular",
  description:
    "Calculate test, quiz, and assignment grades instantly. Create a printable grade chart with custom scales, half points, quarter points, and letter grades.",
  keywords: [
    "grade calculator",
    "easy grader",
    "test grade calculator",
    "grading chart",
    "teacher grade calculator",
  ],
  openGraph: {
    title: "Grade calcular — The fast, flexible grade calculator",
    description: "Instant grades, custom scales, and printable charts for teachers.",
    type: "website",
    url: "/",
    siteName: "Grade calcular",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grade calcular — Free Grade Calculator",
    description: "Grade faster with instant scores and flexible grading charts.",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f7fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
