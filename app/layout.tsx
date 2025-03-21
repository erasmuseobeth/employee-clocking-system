import type { Metadata } from "next";
import "./globals.css";
// import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Clocking System",
  description: "A clocking system employee web application",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}