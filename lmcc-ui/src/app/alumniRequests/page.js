"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import AlumniForm from "@/app/alumniForm/page";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export default function JobOpenings() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [eventsList, setEventsList] = useState([
    // Initial events
    {
      id: 1,
      title: "Networking Dinner",
      date: "November 15, 2024",
      positionsNeeded: "Event Coordinator, Volunteers",
      image: "https://static.thenounproject.com/png/1341136-200.png",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "December 1, 2024",
      positionsNeeded: "Booth Representatives, Organizers",
      image: "https://masterconcept.ai/wp-content/uploads/2020/05/library-of-free-stock-career-fair-png-files-clipart-art-2019-career-fair-png-920_560.png",
    },
    // ... other initial events
  ]);

  const searchedEvents = eventsList.filter((event) => {
    const title = event.title || ""; // Ensure title is a string
    return title.toLowerCase().includes(query.toLowerCase());
  });

  const handleFormSubmit = (newEvent) => {
    const newEventWithId = {
      id: eventsList.length + 1,
      // Use default image if none is provided
      image: newEvent.image || "https://www.pngmart.com/files/22/White-Background-PNG-Photo.png",
      ...newEvent,
    };
    setEventsList((prevEvents) => [...prevEvents, newEventWithId]);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        <Navbar />
        <div className="my-8 text-center">
          <h1 className="text-4xl font-bold text-blue-800">Alumni Job Board</h1>
          <p className="text-gray-500 mt-3 text-lg">
            Explore exciting job opportunities for our alumni!
          </p>
        </div>


        {}
  
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <AlumniForm />
            <button
             onClick={() => setIsOpen(false)}
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
           >
            Submit
            </button>
          </div>
        </div>
        )}
      
        {}
        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search events..."
            className="w-full max-w-md border-gray-300 focus:ring-blue-400 focus:border-blue-400 rounded-full px-5 py-3 shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchedEvents.map((event) => (
            <Card key={event.id} className="shadow-md bg-blue-100">
              <CardHeader className="flex justify-center pt-4">
                <div className="flex justify-center">
                  <img
                    src={event.image}
                    alt={`${event.title} event`}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-lg font-semibold">
                  {event.title}
                </CardTitle>
                <p className="text-center text-gray-700">{formatDate(event.date)}</p>
                <p className="text-center text-gray-500">
                  {event.positionsNeeded}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-7 w-48 h-10 bg-blue-500 text-white text-md flex items-center justify-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Add Job Positions
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-gray-300"
            >
              ✕
            </button>
            <AlumniForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}
