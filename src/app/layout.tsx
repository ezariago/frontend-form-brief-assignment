import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Pengajuan Proyek",
  description: "Form pengajuan proyek sederhana untuk tugas frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
