import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfilePop = ({ name, avatar, bio, topics, number, lmcc, events }) => {
  return (
    <Card className="max-w-md h-[80vh] overflow-hidden shadow-lg">
      <CardHeader className="flex flex-col items-center p-4 border-b">
        <Avatar className="h-32 w-32">
          <AvatarImage src={avatar} />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold">{name}</h2>

        <div className="flex space-x-2 items-center justify-center">
            {topics.first && <Badge variant="outline">{topics.first}</Badge>}
            {topics.second && <Badge variant="outline">{topics.second}</Badge>}
        </div>
        
      </CardHeader>

      <CardFooter className="flex flex-col items-center text-gray-700 text-sm p-4 flex-wrap text-center">
        <div>
            <h3 className="text-md font-semibold flex-wrap text-center">About Me</h3>
            <p className="text-sm text-gray-600 flex-wrap text-center">{bio}</p>
          </div>
      </CardFooter>
      
      <CardFooter className="flex flex-col items-center text-gray-700 text-sm">
        <div className="flex flex-col space-y-4">

          <div>
            <h3 className="text-md font-semibold flex-wrap text-center">LMCC Experiences</h3>
            <p className="text-sm text-gray-600 flex-wrap text-center">{lmcc}</p>
          </div>
          
          <div>
            <h3 className="text-md font-semibold flex-wrap text-center">Portfolio</h3>
            <p className="text-sm text-gray-600 flex-wrap text-center">{events}</p>
          </div>
            
          <div>
            <h3 className="text-md font-semibold flex-wrap text-center">Contact</h3>
            <p className="text-sm text-gray-600 flex-wrap text-center">{number}</p>
          </div>
          < div className="flex space-x-2 items-center justify-center mt-2">
            <Button className="px-3 py-1" variant="outline">X</Button>
            <Button className="px-3 py-1" variant="outline">X</Button>
            <Button className="px-3 py-1" variant="outline">X</Button>
          </div>

        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfilePop;