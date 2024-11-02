"use client";
import { useState } from "react";
export default function ForumButton() {


    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      date: '',
      description: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleClose = () => {
      setIsOpen(false);
      setFormData({ title: '', date: '', description: '' }); // Reset the form
    };
  
    return (
      <div className="flex justify-left mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit an Event
        </button>
  
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4">
              <h2 className="text-2xl font-semibold mb-4">Submit an Event</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Event Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Event Date:
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Description:
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Close
                  </button>
                  </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );



}