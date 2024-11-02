import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

const ProfileUnit = ({ name, avatar, bio, topics, number }) => {
  return (
    <Card className="max-w-sm p-4">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={avatar} />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
        {/* Wrapping and centering name */}
        <h2 className="mt-4 text-lg font-semibold text-center break-words w-full">
          {name}
        </h2>
        <div className="flex space-x-4 items-center justify-center mt-2">
          {topics.first && (
            <Badge className="h-6 w-15" variant="outline">
              {topics.first}
            </Badge>
          )}
          {topics.second && (
            <Badge className="h-6 w-15" variant="outline">
              {topics.second}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-md font-semibold text-center">About Me</h3>
          <p className="text-sm text-gray-600 text-center">{bio}</p>
        </div>
        <br />
        <div>
          <h3 className="text-md font-semibold text-center">Contact</h3>
          <p className="text-sm text-gray-600 text-center">{number}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-gray-700 text-sm p-4">
        <div className="flex space-x-4 items-center">
          <Button className="h-4 w-8" variant="outline">
            <img
              src="lmcc-ui/public/assets/instagramIcon.jpeg"
              alt="Trees"
              height="200"
            />
          </Button>
          <Button className="h-4 w-8" variant="outline">
            X
          </Button>
          <Button className="h-4 w-8" variant="outline">
            X
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileUnit;
