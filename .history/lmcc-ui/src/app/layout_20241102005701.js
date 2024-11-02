import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// app/components/Layout.js

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex">
      {/* Sidebar/Navbar fixed on the left */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-10">
        <Navbar />
      </div>

      {/* Main content area with padding to account for the navbar */}
      <div className="ml-64 p-6 w-full">{children}</div>
    </div>
  );
}
