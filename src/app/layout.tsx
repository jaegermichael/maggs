import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { brand } from "@/data/site";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.shortName} Engineering | Laser CNC Gates & Fabrication`,
    template: `%s | ${brand.shortName} Engineering`,
  },
  description:
    "Maggs Engineering & Consultancy designs and fabricates premium laser CNC gates, privacy screens, wall cladding, signage, renovations and general engineering. Call 0772780125.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <Header />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
