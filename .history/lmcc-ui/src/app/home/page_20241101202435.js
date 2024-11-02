"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";

import { useState } from "react";
import Image from "next/image";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for alumni (want to change this with a sample DB)
  const alumniData = [
    {
      id: 1,
      name: "Andy Painter",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
    {
      id: 2,
      name: "Pablo Picasso",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
    {
      id: 3,
      name: "Anurag Davinci",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
    {
      id: 4,
      name: "Alumni Four",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
    {
      id: 5,
      name: "Alumni Five",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
    {
      id: 6,
      name: "Alumni Six",
      picture: "/assets/stock1.jpeg",
      bio: "Hello!",
      topics: "Guitar",
    },
  ];

  // Filter alumni based on the search term
  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Navbar />

        <h1 className="text-4xl font-bold text-center mb-8">Artist Match</h1>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search alumni..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Alumni Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAlumni.map((alumnus) =>
            ProfileUnit(
              alumnus.name,
              alumnus.picture,
              alumnus.bio,
              alumnus.topics
            )
          )}
        </div>
      </div>
    </div>
  );
}
