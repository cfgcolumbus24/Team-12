"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

import Attending from "./Attending";
import InterestedButton from "./InterestedButton";

export default function EventsCard({ title, description, date }) {
  const [isInterested, setIsInterested] = useState(false);
  console.log(isInterested);
  return (
    <Card className="shadow-lg rounded-md overflow-hidden border border-gray-200">
      <img
        src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg"
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
      <div className="flex flex-col items-center w-full m-3 gap-y-7">
        <Attending profileImg="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />
        <InterestedButton
          onClick={() => setIsInterested(!isInterested)}
          interested={isInterested}
        />
      </div>
    </Card>
  );
}
