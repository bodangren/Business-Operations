import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { StudyDataProvider } from "@/contexts/StudyDataContext";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Math for Business Operations: Applied Accounting with Excel",
  description: "Transform business education with interactive, project-based learning and real-world Excel applications.",
  authors: [{ name: "Daniel Bodanske" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased font-body bg-[#FAFAFA]`}
      >
        <StudyDataProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </StudyDataProvider>
      </body>
    </html>
  );
}
