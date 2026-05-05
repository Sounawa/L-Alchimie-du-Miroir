import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Amiri, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Alchimie du Miroir — Méditer le Coran avec l'Âme",
  description:
    "Méditer le Coran avec l'Âme — Une méthode inédite inspirée des maîtres soufis. Al-Ghazālī • Ibn al-Qayyim • Ibn 'Arabī",
  keywords: [
    "Coran",
    "méditation",
    "soufisme",
    "Al-Ghazali",
    "Ibn Arabi",
    "spiritualité",
    "Islam",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "L'Alchimie du Miroir",
    description:
      "Méditer le Coran avec l'Âme — Une méthode inédite inspirée des maîtres soufis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} ${amiri.variable} ${notoNaskh.variable} antialiased`}
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
