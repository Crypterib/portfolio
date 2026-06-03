import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunday Frank Ochigbo — Cybersecurity Analyst & Blockchain Security Researcher",
  description: "Portfolio of Sunday Frank Ochigbo — Cybersecurity Analyst specializing in Smart Contract Security, Vulnerability Assessment, and Blockchain Research.",
  keywords: ["Cybersecurity", "Blockchain", "Smart Contract", "Penetration Testing", "Frank Ochigbo"],
  authors: [{ name: "Sunday Frank Ochigbo" }],
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Sunday Frank Ochigbo — Cybersecurity Analyst & Blockchain Researcher",
    description: "Cybersecurity Analyst specializing in Smart Contract Security, Vulnerability Assessment, and Blockchain Research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
