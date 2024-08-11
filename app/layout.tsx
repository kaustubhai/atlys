import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-responsive-modal/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlys Asssessment",
  description: "Created by Kaustubhai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-800 text-white min-h-screen w-full flex flex-col justify-center items-center`}>{children}</body>
    </html>
  );
}
