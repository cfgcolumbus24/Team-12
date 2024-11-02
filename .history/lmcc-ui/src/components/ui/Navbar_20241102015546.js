"use client";

import Image from "next/image"; // Import the Image component

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
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="mb-16">
      <NavigationMenuList className="flex space-x-4">
        {" "}
        <NavigationMenuItem>
          <Link href="/home">
            <Image
              src="/assets/logo.png" // Path to your logo
              alt="Logo" // Alternative text for the image
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
    </NavigationMenu>
  );
}
