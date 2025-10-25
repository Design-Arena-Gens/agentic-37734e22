import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-37734e22.vercel.app"),
  title: "J.Muthukumar — UI/UX Designer | High-tech interfaces & Design Systems",
  description:
    "UI/UX design portfolio of J.Muthukumar — product design, motion, and accessible interfaces.",
  openGraph: {
    title: "J.Muthukumar — UI/UX Designer",
    description:
      "High-tech interfaces, motion-rich product design, and accessible systems for modern teams.",
    url: "https://agentic-37734e22.vercel.app",
    siteName: "J.Muthukumar Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J.Muthukumar — UI/UX Designer",
    description:
      "High-tech interfaces, motion-rich product design, and accessible systems for modern teams.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} bg-base text-white antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
