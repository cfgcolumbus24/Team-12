"use client";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";
import { useState, useEffect } from "react";
import Lightbox from "@/components/ui/lightbox_start";
import ProfileLightbox from "@/components/ui/lightbox_profile";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); 
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

  
  useEffect(() => {
    setIsLightboxOpen(true); 
  }, []);

  const openProfileLightbox = (alumnus) => {
    setSelectedAlumnus(alumnus);
    setIsProfileLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />

        <div className="w-full py-8 px-4">
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg">
      Artist Match
    </h1>
    <p className="text-lg text-gray-600 mt-3 tracking-wide font-medium">
      Find and connect with artists!
    </p>
  </div>
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
            <div key={alumnus.id} onClick={() => openProfileLightbox(alumnus)}>
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

      {isLightboxOpen && (
        <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        content={<h1 className="text-2xl font-bold text-center">Check Out What's Coming Soon!</h1>}
        name = {"Party of the Year"}
        location = {"Governor's Island"}
        time = {"12 PM on Saturday, November 2"}
        picture = {"https://wallpapercave.com/wp/wp9977857.jpg"}
        host = {"Some alumni"}
      />
      )}

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
