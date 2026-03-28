import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chioma-emmanuella.vercel.app"),
  title: {
    default: "Chioma Emmanuella | Full-Stack Developer",
    template: "%s | Chioma Emmanuella",
  },
  description:
    "Portfolio of Chioma Emmanuella, a full-stack developer building AI-powered applications and modern web experiences.",
  keywords: [
    "Chioma Emmanuella",
    "Full-Stack Developer",
    "Frontend Developer",
    "Software Engineer",
    "AI Applications",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Python",
    "Flask",
    "Machine Learning",
  ],
  authors: [{ name: "Chioma Emmanuella" }],
  creator: "Chioma Emmanuella",
  openGraph: {
    title: "Chioma Emmanuella | Full-Stack Developer",
    description:
      "Portfolio of Chioma Emmanuella, a full-stack developer building AI-powered applications and modern web experiences.",
    url: "https://chioma-emmanuella.vercel.app",
    siteName: "Chioma Emmanuella Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Chioma Emmanuella Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chioma Emmanuella | Full-Stack Developer",
    description:
      "Portfolio of Chioma Emmanuella, a full-stack developer building AI-powered applications and modern web experiences.",
    images: ["/og-image.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
