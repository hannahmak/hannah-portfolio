import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hannah MacPherson | Frontend Developer",
  description:
    "Portfolio of Hannah MacPherson, a frontend developer with a strong foundation in TypeScript, Next.js, and responsive design. Experienced in building production-ready applications with a focus on performance, accessibility, and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
