import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QRing Pro",
  description: "Control de accesos y gestión de visitantes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, background: "#f4f6fa", minHeight: "100vh", position: "relative" }}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 124px)", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: 64, marginBottom: 0, position: "relative", zIndex: 10, paddingBottom: 60, background: "#f4f6fa", overflowY: "auto" }}>
          <div style={{ width: "100%", maxWidth: 440 }}>{children}</div>
        </main>
        <NavBar />
      </body>
    </html>
  );
}
