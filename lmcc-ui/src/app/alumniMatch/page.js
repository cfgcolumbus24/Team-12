"use client";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";
import { useState, useEffect } from "react";
import ProfileLightbox from "@/components/ui/lightbox_profile";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isProfileLightboxOpen, setIsProfileLightboxOpen] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

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
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "here we go whats the link",
      lmcc: "got grant in 2015",
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
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "here we go whats the link",
      lmcc: "got grant in 2015",
    },
    {
      id: 3,
      name: "Anurag Davinci",
      picture: "https://github.com/shadcn.png",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "here we go whats the link",
      lmcc: "got grant in 2015",
    },
    {
      id: 4,
      name: "Anurag Davinci2",
      picture: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498109.jpg",
      bio: "Hello!",
      topics: { first: "guitar", second: "painting" },
      contact: "+1 638 929 1921",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "here we go whats the link",
      lmcc: "got grant in 2015",
    },
    {
      id: 5,
      name: "Anurag Davinci3",
      picture: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498109.jpg",
      bio: "Hello!",
      topics: { first: "guitar3", second: "painting" },
      contact: "+1 638 929 1921",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "here we go whats the link",
      lmcc: "got grant in 2015",
    },
  ];

  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const openProfileLightbox = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setIsProfileLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        <Navbar />

        <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-blue-800">Alumni Match</h1>
        <p className="text-gray-500 mt-3 text-lg">Find and connect with artists!</p>
        </div>

        <div className="flex justify-center mb-6">
          <Input
            type="text"
            placeholder="Search alumni..."
            className="w-full max-w-md rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              className="cursor-pointer transform transition hover:scale-105"
              onClick={() => openProfileLightbox(alumnus)}
            >
              <ProfileUnit
                name={alumnus.name}
                avatar={alumnus.picture}
                topics={alumnus.topics}
                twitter={alumnus.twitter}
                instagram={alumnus.instagram}
                website={alumnus.website}
              />
            </div>
          ))}
        </div>
      </div>


      {isProfileLightboxOpen && selectedAlumnus && (
        <ProfileLightbox
          isOpen={isProfileLightboxOpen}
          onClose={() => setIsProfileLightboxOpen(false)}
          name={selectedAlumnus.name}
          avatar={selectedAlumnus.picture}
          bio={selectedAlumnus.bio}
          topics={selectedAlumnus.topics}
          number={selectedAlumnus.contact}
          instagram={selectedAlumnus.instagram}
          website={selectedAlumnus.website}
          twitter={selectedAlumnus.twitter}
          lmcc={selectedAlumnus.lmcc}
          events={selectedAlumnus.portfolio}
        />
      )}
    </div>
  );
}