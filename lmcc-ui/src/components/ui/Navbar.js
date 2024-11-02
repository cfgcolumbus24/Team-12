"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useCurrentUser } from "@/app/firebase/firebase";

export default function Navbar() {
  const { currentUser, loading } = useCurrentUser();
  return (
    <div className="flex items-center justify-between mb-16">
      {/* Main Navigation */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-4">
          <NavigationMenuItem>
            <Link href="/home">
              <Image
                src="/assets/logo.png"
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
            <Link href="/alumniMatch" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Alumni Match
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/adminControl" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Admin Dashboard
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
             
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuList className="flex flex-col items-start p-2 bg-white rounded shadow-lg space-y-2">
                <NavigationMenuItem>
                  <Link href="/myProfile" passHref>
                    <NavigationMenuLink className="text-sm whitespace-nowrap hover:text-blue-300 font-medium">
                      My Profile
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/logout" passHref>
                    <NavigationMenuLink className="text-sm whitespace-nowrap hover:text-red-300 font-medium">
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