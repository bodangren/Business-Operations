import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LessonProgressProvider } from "@/contexts/LessonProgressContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Math for Business Operations: Applied Accounting with Excel",
  description: "A comprehensive Grade 12 textbook integrating accounting principles, spreadsheet modeling, and entrepreneurship.",
  authors: [{ name: "Daniel Bodanske" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LessonProgressProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LessonProgressProvider>
      </body>
    </html>
  );
}
