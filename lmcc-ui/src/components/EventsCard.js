"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Attending from "./Attending";
import InterestedButton from "./InterestedButton";

export default function EventsCard({ title, description, date, image }) {
  const [isInterested, setIsInterested] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(28); // Starting count, adjust as needed
  const picIndex = 1;
  const handleInterestedClick = () => {
    setIsInterested(!isInterested);
    setAttendeeCount((prevCount) =>
      isInterested ? prevCount - 1 : prevCount + 1
    );
  };

  // Utility function to get random colors for tags
  const getRandomPicture = (picIndex) => {
    const pics = [
      "artPic.jpeg",
      "bearArtPic.jpg",
      "carStock.jpg",
      "coolArtPic.jpeg",
      "stock1.jpeg",
    ];
    return pics[picIndex % pics.length];
  };

  return (
    <Card className="shadow-lg rounded-md overflow-hidden border border-gray-200">
      <img
        src={image}
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
        <Attending
          profileImg={"/assets/" + getRandomPicture(picIndex)}
          attendeeCount={attendeeCount}
          picIndex={picIndex + 1}
        />
        <InterestedButton
          onClick={handleInterestedClick}
          interested={isInterested}
        />
      </div>
    </Card>
  );
}
