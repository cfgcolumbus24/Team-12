import ForumButton from "@/components/ForumButton";
import EventsCard from "@/components/EventsCard";
import Navbar from "@/components/ui/Navbar";
import SearchBar from "@/components/searchBar";
import { useState } from "react";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const events = [
    {
      title: "Music Festival",
      description: "Join us for an amazing music festival!",
      date: "Nov 10, 2024",
    },
    {
      title: "Art Workshop",
      description: "Learn the basics of painting.",
      date: "Nov 12, 2024",
    },
    {
      title: "Tech Conference",
      description: "Explore the latest in tech.",
      date: "Nov 15, 2024",
    },
    {
      title: "Food Expo",
      description: "Taste a variety of cuisines.",
      date: "Nov 20, 2024",
    },
    {
      title: "Charity Run",
      description: "Run for a cause.",
      date: "Nov 25, 2024",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 border-t-4 border-blue-400"
            >
              <EventsCard
                title={event.title}
                description={event.description}
                date={event.date}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8">
        <ForumButton />
      </div>
    </div>
  );
}
