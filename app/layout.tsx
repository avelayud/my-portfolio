// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjuna Velayudam",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary`}
      >
        <div className="min-h-screen bg-background">
          {/* Global sidebar (desktop + mobile handled inside) */}
          <Sidebar />

          {/* Main column; pad left on desktop to clear fixed sidebar */}
          <div className="flex flex-col min-h-screen md:pl-64">
            {/* Top padding so content doesn't sit under mobile top bar */}
            <main className="flex-1 pt-16 md:pt-10">
              {children}
            </main>

            {/* Global footer */}
            <Footer />
          </div>

          {/* Floating Back to Top button */}
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
