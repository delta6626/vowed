import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
