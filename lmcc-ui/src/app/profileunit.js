import React from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaInstagram, FaGlobe, FaTwitter } from "react-icons/fa";

const ProfileUnit = ({
  name,
  avatar,
  topics,
  instagram,
  website,
  twitter,
  onClick, // Add onClick prop
}) => {
  return (
    <Card className="max-w-34 p-2 cursor-pointer" onClick={onClick}>
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatar} />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
        <h2 className="mt-2 text-md font-semibold">{name}</h2>
        <div className="flex space-x-2 items-center justify-center">
          {topics.first && (
            <Badge className="h-5" variant="outline">
              {topics.first}
            </Badge>
          )}
          {topics.second && (
            <Badge className="h-5" variant="outline">
              {topics.second}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardFooter className="flex flex-col items-center text-gray-700 text-xs p-2 flex-wrap text-center">
        <div className="flex space-x-2 items-center">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Button className="h-6 w-6 border-gray-400 text-gray-500 hover:text-gray-700 hover:border-gray-600" variant="outline">
              <FaInstagram />
            </Button>
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Button className="h-6 w-6 border-gray-400 text-gray-500 hover:text-gray-700 hover:border-gray-600" variant="outline">
              <FaGlobe />
            </Button>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Button className="h-6 w-6 border-gray-400 text-gray-500 hover:text-gray-700 hover:border-gray-600" variant="outline">
              <FaTwitter />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileUnit;
