"use client";

import Image from "next/image"; // Import the Image component
import Link from "next/link";

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

export default function Navbar() {
  return (
    <NavigationMenu className="mb-16 flex items-center justify-between">
      {/* Left Navigation Links */}
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <Link href="/home">
            <Image
              src="/assets/logo.png" // Path to your logo
              alt="Logo"
              width={100}
              height={100}
              className="h-12 w-12"
            />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/home" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/events" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/alumniRequests" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Alumni Job Board
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/newsFeed" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Post Feed
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/myProfile" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              My Profile
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* Right-Aligned Profile Avatar */}
      <NavigationMenuList className="ml-auto flex items-center space-x-4">
        <NavigationMenuItem className="flex items-center">
          <NavigationMenuTrigger>
            <Image
              src="/assets/stock1.jpeg" // Placeholder for user avatar
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full h-10 w-10 cursor-pointer border border-gray-300"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuList className="flex flex-col items-start p-2 bg-white rounded shadow-lg space-y-2">
              <NavigationMenuItem>
                <Link href="/myProfile" passHref>
                  <NavigationMenuLink className="text-sm hover:text-blue-600">
                    View Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/settings" passHref>
                  <NavigationMenuLink className="text-sm hover:text-blue-600">
                    Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/logout" passHref>
                  <NavigationMenuLink className="text-sm hover:text-red-600">
                    Logout
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
