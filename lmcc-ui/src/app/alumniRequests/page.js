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
      image: "https://static.thenounproject.com/png/1341136-200.png",
    },
    {
      id: 2,
      title: "Career Fair",
      date: "December 1, 2024",
      positionsNeeded: "Booth Representatives, Organizers",
      image: "https://masterconcept.ai/wp-content/uploads/2020/05/library-of-free-stock-career-fair-png-files-clipart-art-2019-career-fair-png-920_560.png",
    },
    {
      id: 3,
      title: "Alumni Panel Discussion",
      date: "January 10, 2025",
      positionsNeeded: "Moderators, Panelists",
      image: "https://e7.pngegg.com/pngimages/494/134/png-clipart-human-resource-management-business-organization-panel-discussion-text-human-resource-management-thumbnail.png",
    },
    {
      id: 4,
      title: "Annual Alumni Reunion",
      date: "February 20, 2025",
      positionsNeeded: "Planning Committee, Event Staff",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9_AlQkEUzP3N9rl4ph-LmGRpzfc36kCSQA&s",
    },
    {
      id: 5,
      title: "Workshop on Career Development",
      date: "March 5, 2025",
      positionsNeeded: "Facilitators, Helpers",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/career-development-illustration-download-in-svg-png-gif-file-formats--path-logo-opportunities-promotions-advancement-school-education-illustrations-3575375.png",
    },
    {
      id: 6,
      title: "Mentorship Program Kickoff",
      date: "April 12, 2025",
      positionsNeeded: "Mentors, Mentees",
      image: "https://irq.sirweb.org/downloads/173/download/f706e348273845b8859e90c08c3ddcda.png?cb=baadf7eed57269eaa9f724fe18b337b1",
    },
  ];

    const searchedEvents = eventsList.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gray-200 py-12 px-6">
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
