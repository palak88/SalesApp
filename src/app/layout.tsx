import type { Metadata } from "next";
import { Comme, Encode_Sans } from "next/font/google";
import "./globals.css";

const encode_sans = Encode_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TANN TRIM",
  description: "Sales App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encode_sans.className}>{children}</body>
    </html>
  );
}
