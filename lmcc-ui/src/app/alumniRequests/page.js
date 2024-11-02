"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import Navbar from "@/components/ui/Navbar";
import AlumniForm from "@/app/alumniForm/page";

export default function JobOpenings() {
  const [query, setQuery] = useState("");
 const [isOpen, setIsOpen] = useState(false);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};

const handleClose = () => {
  setIsOpen(false);
  setFormData({ title: '', date: '', description: '' }); // Reset the form
};

  const eventsList = [
    {
      id: 1,
      title: "Networking Dinner",
      date: "November 15, 2024",
      positionsNeeded: "Event Coordinator, Volunteers",
      image: "/assets/event1.jpeg",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "December 1, 2024",
      positionsNeeded: "Booth Representatives, Organizers",
      image: "/assets/event2.jpeg",
    },
    {
      id: 3,
      title: "Alumni Panel Discussion",
      date: "January 10, 2025",
      positionsNeeded: "Moderators, Panelists",
      image: "/assets/event3.jpeg",
    },
    {
      id: 4,
      title: "Annual Alumni Reunion",
      date: "February 20, 2025",
      positionsNeeded: "Planning Committee, Event Staff",
      image: "/assets/event4.jpeg",
    },
    {
      id: 5,
      title: "Workshop on Career Development",
      date: "March 5, 2025",
      positionsNeeded: "Facilitators, Helpers",
      image: "/assets/event5.jpeg",
    },
    {
      id: 6,
      title: "Mentorship Program Kickoff",
      date: "April 12, 2025",
      positionsNeeded: "Mentors, Mentees",
      image: "/assets/event6.jpeg",
    },
  ];

    const searchedEvents = eventsList.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />
        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800"> Alumni Job Board</h1>
          <p className="text-gray-600 mt-2"> Explore exciting job opportunities for our alumni!</p>

        </div>


        {}
        <div className="mb-4 flex justify-center">

             <button
          onClick={() => setIsOpen(true)}
          className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        > Add Event Positions</button>
           

          
        </div>

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
          </div>
        </div>
        )}
      
        {}
        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search events..."
            className="w-full max-w-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchedEvents.map((event) => (
            <Card key={event.id} className="shadow-md">
              <CardHeader className="flex justify-center pt-4">
                <div className="relative w-24 h-24">
                  <Image
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
                <p className="text-center text-gray-700">{event.date}</p>
                <p className="text-center text-gray-500">
                  {event.positionsNeeded}
                </p>
              </CardContent>
            </Card>
          ))}


        </div>
          
      </div>
      
      
    </div>
        
  );
}
