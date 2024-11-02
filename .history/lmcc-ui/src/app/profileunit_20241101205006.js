import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaInstagram, FaGlobe, FaTwitter } from "react-icons/fa"; // Import icons from react-icons

const ProfileUnit = ({
  name,
  avatar,
  bio,
  topics,
  number,
  instagram,
  website,
  twitter,
}) => {
  return (
    <Card className="max-w-sm p-4">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={avatar} />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold">{name}</h2>
        <div className="flex space-x-4 items-center justify-center">
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
          <h3 className="text-md font-semibold flex-wrap text-center">
            About Me
          </h3>
          <p className="text-sm text-gray-600 flex-wrap text-center">{bio}</p>
        </div>
        <br />
        <div>
          <h3 className="text-md font-semibold flex-wrap text-center">
            Contact
          </h3>
          <p className="text-sm text-gray-600 flex-wrap text-center">
            {number}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-gray-700 text-sm p-4 flex-wrap text-center">
        <div className="flex space-x-4 items-center">
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Button className="h-8 w-8" variant="outline">
              <FaInstagram />
            </Button>
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Button className="h-8 w-8" variant="outline">
              <FaGlobe />
            </Button>
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <Button className="h-8 w-8" variant="outline">
              <FaTwitter />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileUnit;
