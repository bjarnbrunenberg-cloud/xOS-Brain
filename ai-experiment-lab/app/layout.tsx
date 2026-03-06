import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Experiment Lab — Turn AI Ambitions into Structured Experiments",
  description:
    "Turn vague AI initiatives into structured, killable experiments with a hypothesis, single KPI, kill criteria, and a 30/60/90-day plan. Built by Bjarn Brunenberg.",
  openGraph: {
    title: "AI Experiment Lab",
    description:
      "Turn vague AI initiatives into structured experiments with a 30/60/90-day plan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
