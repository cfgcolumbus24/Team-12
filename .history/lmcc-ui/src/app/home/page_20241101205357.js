"use client";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";

import { useState } from "react";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for alumni
  const alumniData = [
    {
      id: 1,
      name: "Andy Painter",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
    },
    {
      id: 2,
      name: "Pablo Picasso",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
    },
    {
      id: 3,
      name: "Anurag Davinci",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
    },
    {
      id: 4,
      name: "Anurag Davinci",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
    },
    {
      id: 5,
      name: "Anurag Davinci",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
    },
    // Add more entries if needed
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
          {filteredAlumni.map((alumnus) => (
            <ProfileUnit
              key={alumnus.id}
              name={alumnus.name}
              avatar={alumnus.picture}
              bio={alumnus.bio}
              topics={alumnus.topics}
              number={alumnus.contact}
              twitter={alu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
