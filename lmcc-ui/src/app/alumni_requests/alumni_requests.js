"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'; // Import Link from next/link

export default function JobPositions() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for upcoming events (replace with real data)
  const eventsData = [
    {
      id: 1,
      name: "Networking Dinner",
      date: "November 15, 2024",
      rolesNeeded: "Event Coordinator, Volunteers",
      picture: "/assets/event1.jpeg",
    },
    {
      id: 2,
      name: "Career Fair",
      date: "December 1, 2024",
      rolesNeeded: "Booth Representatives, Organizers",
      picture: "/assets/event2.jpeg",
    },
    {
      id: 3,
      name: "Alumni Panel Discussion",
      date: "January 10, 2025",
      rolesNeeded: "Moderators, Panelists",
      picture: "/assets/event3.jpeg",
    },
    {
      id: 4,
      name: "Annual Alumni Reunion",
      date: "February 20, 2025",
      rolesNeeded: "Planning Committee, Event Staff",
      picture: "/assets/event4.jpeg",
    },
    {
      id: 5,
      name: "Workshop on Career Development",
      date: "March 5, 2025",
      rolesNeeded: "Facilitators, Helpers",
      picture: "/assets/event5.jpeg",
    },
    {
      id: 6,
      name: "Mentorship Program Kickoff",
      date: "April 12, 2025",
      rolesNeeded: "Mentors, Mentees",
      picture: "/assets/event6.jpeg",
    },
  ];

  // Filter events based on the search term
  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8"> Alumni Job Positions </h1>

        {/* "+" Button to open Event Request Form */}
        <div className="mb-4 flex justify-center">
          <Link href="/event-request" className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            <span className="mr-2">+</span> Add Event Positions
          </Link>
        </div>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search events..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="shadow-md">
              <CardHeader className="flex justify-center pt-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={event.picture}
                    alt={`${event.name} event`}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-lg font-semibold">
                  {event.name}
                </CardTitle>
                <p className="text-center text-gray-700">{event.date}</p>
                <p className="text-center text-gray-500">{event.rolesNeeded}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
