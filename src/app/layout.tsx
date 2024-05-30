import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata()

export const viewport = {
  themeColor: "#3B95AE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <head>
      <meta name="theme-color" content={viewport.themeColor} />
      </head>
      <Providers>
        <body className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}><Navbar />{children}</body>
      </Providers>
      
    </html>
  );
}
