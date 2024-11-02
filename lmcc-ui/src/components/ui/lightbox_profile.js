import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaInstagram, FaGlobe, FaTwitter } from "react-icons/fa";

const ProfileLightbox = ({ isOpen, onClose, name, avatar, bio, topics, number, lmcc, events, instagram, website, twitter }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img src={avatar} alt={`${name}'s avatar`} className="h-32 w-32 rounded-full" />
          <h2 className="mt-4 text-lg font-semibold">{name}</h2>
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
          <div className="mt-4">
            <h3 className="text-md font-semibold text-center">About Me</h3>
            <p className="text-sm text-gray-600 text-center">{bio}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-center">LMCC Experiences</h3>
            <p className="text-sm text-gray-600 text-center">{lmcc}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-center">Portfolio</h3>
            <p className="text-sm text-gray-600 text-center">{events}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-center">Phone Number</h3>
            <p className="text-sm text-gray-600">{number}</p>
          </div>
          <div className="flex space-x-2 items-center mt-4">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><FaInstagram /></Button>
            </a>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><FaGlobe /></Button>
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><FaTwitter /></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLightbox;
