import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Lightbox = ({ isOpen, onClose, content, picture, name, location, time }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="p-4">
          {content}
        </div>
        <div className="flex justify-center w-full">
          <img src={picture} alt="Event Image" className="max-w-full h-auto rounded-lg" />
        </div>
        <div className="p-4 text-xl">
          Event Name: <span className="font-semibold">{name}</span>
        </div>
        <div className="mb-2 border-t border-dashed border-gray-300"></div>
        <div className="p-4 text-lg">
          Location: <span className="font-semibold">{location}</span>
          <br/>

          Time: <span className="font-semibold">{time}</span>
          Hosted by: 
        </div>
        <div className="mt-4">
          <Button onClick={handleRSVP} variant="outline">RSVP</Button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;