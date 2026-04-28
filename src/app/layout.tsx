import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic", "latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Alchimie du Miroir — Livre Interactif Niveau 1",
  description: "Méditer le Coran avec l'Âme — Une méthode inédite inspirée des maîtres soufis. Al-Ghazālī • Ibn al-Qayyim • Ibn 'Arabī",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
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
        className={`${amiri.variable} ${cormorant.variable} ${inter.variable} ${notoNaskh.variable} antialiased`}
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
