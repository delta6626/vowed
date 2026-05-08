import { ReactNode } from "react";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head></head>
      <body className="font-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
