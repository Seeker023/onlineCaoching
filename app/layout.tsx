import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EduVerse — Learn at your own pace. Grow on your own terms.",
  description:
    "EduVerse offers live classes, recorded courses, and personal coaching for students who want flexibility and real results.",
  keywords: [
    "online coaching",
    "live classes",
    "courses",
    "education",
    "learning platform",
    "JEE",
    "NEET",
    "coding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
