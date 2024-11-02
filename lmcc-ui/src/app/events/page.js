// app/events/page.js
"use client";

import ForumButton from "@/components/ForumButton";
import EventsCard from "@/components/EventsCard";
import Navbar from "@/components/ui/Navbar";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming Input is from Shadcn UI for consistent styling

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      title: "Music Festival",
      description: "Join us for an amazing music festival!",
      date: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Art Workshop",
      description: "Learn the basics of painting.",
      date: "Nov 12, 2024",
      image: "http://janislander.com/wp-content/uploads/2013/10/IMG_0001.jpg"

    },
    {
      title: "Tech Conference",
      description: "Explore the latest in tech.",
      date: "Nov 15, 2024",
       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETLqARFPDW4FVlpHvMJKZnpe2d5i3Mb8jaw&s"
    },
    {
      title: "Food Expo",
      description: "Taste a variety of cuisines.",
      date: "Nov 20, 2024",
       image: "https://i.pinimg.com/originals/cc/c5/37/ccc5372e0b0539737d34c00f08d049d2.jpg"
      
      
    },
    {
      title: "Charity Run",
      description: "Run for a cause.",
      date: "Nov 25, 2024",
      image: "https://i.pinimg.com/originals/3d/ab/ea/3dabea7365a810ffa5ca1a549f6f170c.png"
    },
  ];

  // Filter events by title based on search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />

        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Upcoming Events</h1>
          <p className="text-gray-600 mt-2">
            Don't miss out on these exciting activities!
          </p>
        </div>

        {/* Inline Search Bar */}
        <div className="my-4 w-full flex justify-center">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-gray-300 rounded-lg px-4 py-2 w-1/4"
          />
        </div>

        {/* Event List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 border-t-4 border-blue-400"
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
      <div className="fixed bottom-7 right-10">
        <ForumButton />
      </div>

    </div>
  );
}
