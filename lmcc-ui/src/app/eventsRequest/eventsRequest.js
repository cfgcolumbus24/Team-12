"use client";

import React, { useState } from 'react';

const EventSubmissionForm = () => {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    details: '',
    eventDate: '',
    venue: '',
    requiredStaff: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(eventDetails);
    // Optionally, reset the form after submission
    setEventDetails({
      title: '',
      details: '',
      eventDate: '',
      venue: '',
      requiredStaff: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Create Event Request</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={eventDetails.title}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="details"
            id="details"
            value={eventDetails.details}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={eventDetails.eventDate}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="venue"
            id="venue"
            value={eventDetails.venue}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="requiredStaff" className="block text-sm font-medium text-gray-700">
            Staff Needed
          </label>
          <textarea
            name="requiredStaff"
            id="requiredStaff"
            value={eventDetails.requiredStaff}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default EventSubmissionForm;
