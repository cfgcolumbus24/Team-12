"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/components/ui/Navbar";

export default function JobOpenings() {
  const [query, setQuery] = useState("");

  // Sample data for upcoming events (replace with real data)
  const eventsList = [
    {
      id: 1,
      title: "Networking Dinner",
      date: "November 15, 2024",
      positionsNeeded: "Event Coordinator, Volunteers",
      image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-business-lunch-vector-concept-color-illustration-png-image_11902133.png",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "December 1, 2024",
      positionsNeeded: "Booth Representatives, Organizers",
      image: "https://www.pngitem.com/pimgs/m/568-5681240_job-fair-png-demanded-jobs-2025-transparent-png.png",
    },
    {
      id: 3,
      title: "Alumni Panel Discussion",
      date: "January 10, 2025",
      positionsNeeded: "Moderators, Panelists",
      image: "https://media.licdn.com/dms/image/v2/C5612AQGjSS9LLG4Bjw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1536154980815?e=2147483647&v=beta&t=uDcuUebpSi7CCW7CSZMvMHSbstyW8yhIlHO1J8hfMA8",
    },
    {
      id: 4,
      title: "Annual Alumni Reunion",
      date: "February 20, 2025",
      positionsNeeded: "Planning Committee, Event Staff",
      image: "https://png.pngtree.com/element_origin_min_pic/16/05/26/165746af26bf0f9.jpg",
    },
    {
      id: 5,
      title: "Workshop on Career Development",
      date: "March 5, 2025",
      positionsNeeded: "Facilitators, Helpers",
      image: "https://img.freepik.com/premium-vector/businessman-career-development-illustration_1124-462.jpg",
    },
    {
      id: 6,
      title: "Mentorship Program Kickoff",
      date: "April 12, 2025",
      positionsNeeded: "Mentors, Mentees",
      image: "https://media.licdn.com/dms/image/C4E12AQGnCW8yJzm_og/article-cover_image-shrink_600_2000/0/1540810957226?e=2147483647&v=beta&t=wTvGqidjQh1RF42NaSo7-ID6d7YtIni3Hs-a0Y6YVHo",
    },
  ];

  // Filter events based on the search term
  const searchedEvents = eventsList.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4"> {/* Light gray background added */}
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <h1 className="text-4xl font-bold text-center mb-8"> Alumni Job Positions </h1>

        {/* "+" Button to open Event Request Form */}
        <div className="mb-4 flex justify-center">
          <Link href="/alumniForm" className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            <span className="mr-2">+</span> Add Event Positions
          </Link>
        </div>

        {/* Search Input */}
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
            <Card key={event.id} className="bg-blue-100 shadow-md"> {/* Lighter blue background added */}
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
                <p className="text-center text-gray-700">{event.date}</p>
                <p className="text-center text-gray-500">{event.positionsNeeded}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
