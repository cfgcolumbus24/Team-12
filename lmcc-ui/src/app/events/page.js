"use client";

import ForumButton from "@/components/ForumButton";
import EventsCard from "@/components/EventsCard";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming Input is from Shadcn UI for consistent styling

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const events = [
    {
      title: "Music Festival",
      description: "Join us for a blast!",
      date: "Nov 2, 2024 @ 5 PM",
      location: "Central Park",
      image:
        "https://images.unsplash.com/flagged/photo-1565070930498-fe3938b105d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljJTIwZmVzdGl2YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Live Jazz Night",
      description: "Cool classy music",
      date: "Nov 5, 2024 @ 8 PM",
      location: "Blue Note",
      image:
        "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF6eiUyMG5pZ2h0fGVufDB8fDB8fHww",
    },
    {
      title: "Images: Sculpture Exhibitions",
      description: "Observe the wonders.",
      date: "Nov 7, 2024 @ 5 PM",
      location: "Bronx Museum",
      image:
        "https://images.unsplash.com/photo-1597011652683-a9cec37b3bc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1bHB0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Watercolor Workshop",
      description: "Paint the rainbow.",
      date: "Nov 12, 2024 @ 3 PM",
      location: "The Arts Center",
      image:
        "https://images.unsplash.com/photo-1591693898234-f2bba7c8beaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Piano Concert: Beethoven",
      description: "Performed by Alice Young",
      date: "Nov 16, 2024 @ 7 PM",
      location: "Carnegie Hall",
      image:
        "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlhbm98ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Filter events by title based on search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        <Navbar />

        <div className="my-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800">Upcoming Events</h1>
          <p className="text-gray-500 mt-3 text-lg">
            Discover exciting activities and plan your next adventure!
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center my-6">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-full px-5 py-3 shadow-sm"
          />
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105 border-t-4 border-blue-400 overflow-hidden"
              >
                <EventsCard
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  image={event.image}
                />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No events found.
            </p>
          )}
        </div>
      </div>

      {/* Floating Forum Button */}
      <div className="fixed bottom-8 right-8">
        <ForumButton />
      </div>
    </div>
  );
}
