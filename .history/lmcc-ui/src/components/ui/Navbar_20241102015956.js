"use client";
import Image from "next/image";
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
    <div className="flex items-center justify-between mb-16">
      {/* Main Navigation */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-4">
          <NavigationMenuItem>
            <Link href="/home">
              <Image
                src="/assets/stock1.jpeg"
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
        </NavigationMenuList>
      </NavigationMenu>

      {/* Profile Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-10 w-10 p-0">
              <Image
                src="/assets/profile.jpg"
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
    </div>
  );
}
