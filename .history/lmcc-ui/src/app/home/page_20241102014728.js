"use client";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";
import { useState, useEffect } from "react";
import Lightbox from "@/components/ui/lightbox_start";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
    },
  ];

  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setIsLightboxOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />

        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Artist Match</h1>
          <p className="text-gray-600 mt-2">Find and connect with artists!</p>
        </div>

        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search alumni..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 gap-8 mt-8">
          {filteredAlumni.map((alumnus) => (
            <ProfileUnit
              key={alumnus.id}
              name={alumnus.name}
              avatar={alumnus.picture}
              topics={alumnus.topics}
              twitter={alumnus.twitter}
              instagram={alumnus.instagram}
              website={alumnus.portfolio}
            />
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          content={
            <h1 className="text-2xl font-bold text-center">
              Check Out What's Coming Soon!
            </h1>
          }
          name={"Party of the Year"}
          location={"Governor's Island"}
          time={"12 PM on Saturday, November 2"}
          picture={"https://wallpapercave.com/wp/wp9977857.jpg"}
          host={"Some alumni"}
        />
      )}
    </div>
  );
}
