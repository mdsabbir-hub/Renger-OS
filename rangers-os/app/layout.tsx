import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranger's OS",
  description: "The Intelligence & Command System of ForthPoint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
