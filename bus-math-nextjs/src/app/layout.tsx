import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { StudyDataProvider } from "@/contexts/StudyDataContext";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} ${inter.variable.replace("--font-body", "--font-display")} ${ibmPlexMono.variable} antialiased font-body font-light bg-background text-foreground`}
      >
        <StudyDataProvider>
          <Header />
          <main className="flex-1">{children}</main>
        </StudyDataProvider>
      </body>
    </html>
  );
}
