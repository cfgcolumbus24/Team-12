// app/components/Layout.js
"use client";

import Navbar from "@/components/ui/Navbar";

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
