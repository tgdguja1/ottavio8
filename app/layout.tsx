import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ensemble Vocal Ottavio (EVO)",
  description: "L'Ensemble Vocal Ottavio (EVO) rassemble huit voix passionnées. Répertoire varié allant du classique au contemporain.",
  openGraph: {
    title: "Ensemble Vocal Ottavio (EVO)",
    description: "Huit voix. Une harmonie.",
    locale: "fr_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body style={{margin: 0, padding: 0}}>{children}</body>
    </html>
  );
}
