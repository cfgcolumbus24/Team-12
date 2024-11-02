"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Lightbox = ({ isOpen, onClose, content, picture, name, location, time, host }) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div 
        className="relative rounded-lg shadow-lg max-w-lg w-full transition-transform duration-300 ease-in-out" 
        style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl z-10">
            &times;
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 rounded-lg p-4 max-w-xs w-full">
            <div className="relative z-20 text-white">
              <div className="text-lg mt-2">{content}</div>
              <div className="mt-4">
                <Button onClick={() => router.push('/events')} variant="outline" className="w-full text-white border-white">
                  Interested!
                </Button>
              </div>
              <br />
              <div className="text-2xl font-bold">{name}</div>
              <div className="mt-4">
                <div>Location: <span className="font-semibold">{location}</span></div>
                <div>Time: <span className="font-semibold">{time}</span></div>
                <div>Hosted by: <span className="font-semibold">{host}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;