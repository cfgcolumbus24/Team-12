"use client";

import React, { useState } from "react";

const RequestForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    details: "",
    eventDate: "",
    venue: "",
    staffRequirements: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };


  return (
    <div className="max-w-md mx-auto p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-3">Alumni Job Request Form</h2>
      <form onSubmit={handleFormSubmit} className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="details"
            id="details"
            value={formValues.details}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
            rows="3"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            value={formValues.eventDate}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
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
            value={formValues.venue}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="staffRequirements" className="block text-sm font-medium text-gray-700">
            Staff Needed
          </label>
          <textarea
            name="staffRequirements"
            id="staffRequirements"
            value={formValues.staffRequirements}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring focus:ring-blue-500"
            rows="2"
          />
        </div>

      </form>
    </div>
  );
};

export default RequestForm;
