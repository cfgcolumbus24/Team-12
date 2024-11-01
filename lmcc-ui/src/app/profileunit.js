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

const ProfileUnit = ({ name, avatar, bio, topics}) => {
  return (
    <Card className="max-w-sm p-4">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-32 w-32">
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold">{name}</h2>
        <div className="flex space-x-4 items-center">
          <Button className="h-4 w-8" variant="outline">X</Button>
          <Button className="h-4 w-8" variant="outline">X</Button>
          <Button className="h-4 w-8" variant="outline">X</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 items-center justify-center">
          {topics.first && <Badge className="h-6 w-15" variant="outline">{topics.first}</Badge>}
          {topics.second && <Badge className="h-6 w-15" variant="outline">{topics.second}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-gray-700 text-sm">
        <p className="text-sm text-gray-600">{bio}</p>
      </CardFooter>
    </Card>
  );
};

export default ProfileUnit;