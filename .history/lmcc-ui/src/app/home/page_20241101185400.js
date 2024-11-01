"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlumniPanel() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for alumni (want to change this with a sample DB)
  const alumniData = [
    { id: 1, name: "Andy Painter", picture: "/assets/stock1.jpeg" },
    { id: 2, name: "Pablo Picasso", picture: "/assets/stock1.jpeg" },
    { id: 3, name: "Anurag Davinci", picture: "/assets/stock1.jpeg" },
    { id: 4, name: "Alumni Four", picture: "/assets/stock1.jpeg" },
    { id: 5, name: "Alumni Five", picture: "/assets/stock1.jpeg" },
    { id: 6, name: "Alumni Six", picture: "/assets/stock1.jpeg" },
  ];

  // Filter alumni based on the search term
  const filteredAlumni = alumniData.filter((alumnus) =>
    alumnus.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {" "}
            {/* Horizontal flex layout with spacing */}
            <NavigationMenuItem>
              <Link href="/home" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/form" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events Form
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/discussion" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Discussion
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <h1 className="text-4xl font-bold text-center mb-8">Artist Match</h1>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <Input
            type="text"
            placeholder="Search alumni..."
            className="w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Alumni Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredAlumni.map((alumnus) => (
            <Card key={alumnus.id} className="shadow-md">
              <CardHeader className="flex justify-center pt-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={alumnus.picture}
                    alt={`${alumnus.name}'s profile`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-lg font-semibold">
                  {alumnus.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
