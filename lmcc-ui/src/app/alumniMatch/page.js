"use client";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/Navbar";
import ProfileUnit from "../profileunit";
import { useState, useEffect } from "react";
import ProfileLightbox from "@/components/ui/lightbox_profile";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isProfileLightboxOpen, setIsProfileLightboxOpen] = useState(false);
  const [selectedAlumnus, setSelectedAlumnus] = useState(null);

  const alumniData = [
    {
      id: 1,
      name: "Alice Young",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7vyZzG1iOLc3J37W1qMcxwiE7PKT3GV_XQ&s",
      bio: "Hello! I love playing the piano, and in my free time I enjoy painting and sketching.",
      topics: { first: "Music", second: "Piano" },
      contact: "+1 123 456 7890",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "UMEZ Arts Engagement Grant in 2015",
    },
    {
      id: 2,
      name: "Pablo Picasso",
      picture: "https://images.unsplash.com/photo-1533158691535-6466cef7f713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8fDA%3D",
      bio: "Shapes. Colors.",
      topics: { first: "acrylic", second: "Performance" },
      contact: "+1 112 481 6326",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Arts Center Residency 2020",
    },
    {
      id: 3,
      name: "Adele Star",
      picture: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXMlMjBhbmQlMjBtdXNpYyUyMG5vdGVzfGVufDB8fDB8fHww",
      bio: "Singing vibes",
      topics: { first: "Singing", second: "Music" },
      contact: "+1 098 765 4321",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Arts Center Residency 2018",
    },
    {
      id: 4,
      name: "Billy Goat",
      picture: "https://plus.unsplash.com/premium_photo-1671516771888-0276e83e74a8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "I like drums. I like snow.",
      topics: { first: "Music", second: "Drums" },
      contact: "+1 111 111 1111",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Creative Engagement Grant 2010",
    },
    {
      id: 5,
      name: "Dan Ish",
      picture: "https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlsbXxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Yes, my name is danish.",
      topics: { first: "Film", second: "photographer" },
      contact: "+1 010 101 0101",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Creative Engagement Grant 2005",
    },
    {
      id: 6,
      name: "Marco Polo",
      picture: "https://images.unsplash.com/photo-1593721627612-4c8376834dcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "I've traveled the world.",
      topics: { first: "Painting", second: "modern" },
      contact: "+1 234 567 8901",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Creative Learning Grant 2023",
    },
    {
      id: 7,
      name: "Mary Sue",
      picture: "https://plus.unsplash.com/premium_photo-1661409055137-c6097b37a868?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Dancing through my dreams",
      topics: { first: "Dance", second: "ballet" },
      contact: "+1 285 426 5739",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Arts Center Residency 2018",
    },
    {
      id: 8,
      name: "Dion Celine",
      picture: "https://plus.unsplash.com/premium_photo-1672287578309-2a2115000688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2N1bHB0dXJlfGVufDB8fDB8fHww",
      bio: "The world formed at the finger tips",
      topics: { first: "sculpture", second: "greek" },
      contact: "+1 357 913 5791",
      twitter: "https://x.com/LMCC",
      instagram: "https://www.instagram.com/lmcc_nyc",
      website: "https://www.journoportfolio.com/examples/artists/",
      portfolio: "https://www.journoportfolio.com/examples/artists/",
      lmcc: "Creative Learning Grant 2002",
    },
  ];
  const filteredAlumni = alumniData.filter((alumnus) => {
    const matchesName = alumnus.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic ? 
      alumnus.topics.first === selectedTopic || alumnus.topics.second === selectedTopic || alumnus.topics.third === selectedTopic
      : true;
    return matchesName && matchesTopic;
  });
  

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

        {/* Search bar and dropdown filter */}
        <div className="flex justify-center mb-6 space-x-4">
          <Input
            type="text"
            placeholder="Search alumni..."
            className="w-full max-w-md rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full max-w-xs rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">All Topics</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Dance">Dance</option>
            <option value="Guitar">Guitar</option>
            <option value="Performance">Performance</option>
            <option value="Painting">Painting</option>
            <option value="Piano">Piano</option>
            <option value="Singing">Singing</option>
          </select>
        </div>

        {/* Alumni profiles grid */}
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

      {/* Profile Lightbox */}
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