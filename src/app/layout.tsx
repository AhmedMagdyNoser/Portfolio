import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Magdy",
  description:
    "Ahmed Magdy, a software engineer specializing in React, Next.js, and TypeScript. Explore projects, skills, and expertise in building scalable and efficient web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
