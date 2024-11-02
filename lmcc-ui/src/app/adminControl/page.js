"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function AdminDashboard() {
  const initialUsers = [
    { id: 1, name: "John Doe", createdAt: "2024-01-15", role: "Alumni" },
    { id: 2, name: "Jane Smith", createdAt: "2024-02-10", role: "Member" },
    { id: 3, name: "Bob Johnson", createdAt: "2024-03-05", role: "Admin" },
    { id: 4, name: "Alice Brown", createdAt: "2024-04-20", role: "Alumni" },
    { id: 5, name: "Charlie White", createdAt: "2024-05-25", role: "Member" },
    { id: 6, name: "Diana Prince", createdAt: "2024-06-15", role: "Admin" },
    { id: 7, name: "Elena Gilbert", createdAt: "2024-07-10", role: "Alumni" },
    { id: 8, name: "Frank Castle", createdAt: "2024-08-20", role: "Member" },
    { id: 9, name: "Grace Hopper", createdAt: "2024-09-15", role: "Admin" },
    { id: 10, name: "Hank Pym", createdAt: "2024-10-05", role: "Alumni" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedModule, setSelectedModule] = useState("Users");

  // Event-related states with dummy data
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Community Meetup",
      date: "2024-11-10",
      description: "A gathering for community members.",
    },
    {
      id: 2,
      name: "Tech Workshop",
      date: "2024-12-05",
      description: "A workshop on emerging tech trends.",
    },
  ]);

  const [submittedEvents, setSubmittedEvents] = useState([
    {
      id: 3,
      name: "Annual Gala",
      date: "2024-12-20",
      description: "A formal event with awards and entertainment.",
    },
    {
      id: 4,
      name: "Fundraiser",
      date: "2025-01-15",
      description: "An event to raise funds for local charities.",
    },
  ]);

  const [showForm, setShowForm] = useState(null);

  const handleSortChange = (sortField) => {
    setSortBy(sortField);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleRoleChange = (id, newRole) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const handleAddEvent = (event) => {
    event.preventDefault();
    const newEvent = {
      id: events.length + 1,
      name: event.target.name.value,
      date: event.target.date.value,
      description: event.target.description.value,
    };
    setEvents([...events, newEvent]);
    setShowForm(null); // Close the form after adding
  };

  const handleApproveEvent = (eventId, isApproved) => {
    setSubmittedEvents(submittedEvents.filter((e) => e.id !== eventId));
    if (isApproved) {
      const approvedEvent = submittedEvents.find((e) => e.id === eventId);
      setEvents([...events, approvedEvent]);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((e) => e.id !== eventId));
  };

  const renderEventsContent = () => {
    return (
      <div>
        {/* Centered Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setShowForm("add")}
          >
            Add Event
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setShowForm("approve")}
          >
            Approve Event
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setShowForm("delete")}
          >
            Delete Event
          </button>
        </div>

        {/* Conditionally Render Forms */}
        {showForm === "add" && (
          <form onSubmit={handleAddEvent} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              className="border px-2 py-1 w-full"
              required
            />
            <input
              type="date"
              name="date"
              placeholder="Event Date"
              className="border px-2 py-1 w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              className="border px-2 py-1 w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit Event
            </button>
          </form>
        )}

        {showForm === "approve" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Approve Events</h2>
            {submittedEvents.length === 0 ? (
              <p>No events to approve</p>
            ) : (
              <div className="space-y-2">
                {submittedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <div>
                      <h3 className="text-md font-medium">{event.name}</h3>
                      <p>{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        className="px-4 py-1 bg-green-500 text-white rounded"
                        onClick={() => handleApproveEvent(event.id, true)}
                      >
                        Confirm
                      </button>
                      <button
                        className="px-4 py-1 bg-red-500 text-white rounded"
                        onClick={() => handleApproveEvent(event.id, false)}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showForm === "delete" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Delete Events</h2>
            {events.length === 0 ? (
              <p>No events to delete</p>
            ) : (
              <div className="space-y-2">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <div>
                      <h3 className="text-md font-medium">{event.name}</h3>
                      <p>{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                    <button
                      className="px-4 py-1 bg-red-500 text-white rounded"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderModuleContent = () => {
    const handleSaveChanges = () => {
      // Logic to save changes (e.g., send updated data to the backend)
      console.log("Changes saved:", users);
      alert("Changes saved successfully!");
    };

    switch (selectedModule) {
      case "Users":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <div
              className="overflow-y-auto border border-gray-300 rounded-lg"
              style={{ maxHeight: "calc(5 * 2.5rem)" }}
            >
              <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="sticky top-0 bg-gray-100">
                  <tr className="text-left">
                    <th
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => handleSortChange("name")}
                    >
                      Name
                    </th>
                    <th
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => handleSortChange("createdAt")}
                    >
                      Created At
                    </th>
                    <th
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => handleSortChange("role")}
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-2">{user.name}</td>
                      <td className="px-4 py-2">{user.createdAt}</td>
                      <td className="px-4 py-2">
                        <select
                          className="border rounded px-2 py-1 bg-white"
                          value={user.role}
                          onChange={(e) =>
                            handleRoleChange(user.id, e.target.value)
                          }
                        >
                          <option value="Admin">Admin</option>
                          <option value="Alumni">Alumni</option>
                          <option value="Member">Member</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-start mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        );
      case "Events":
        return renderEventsContent();
      case "Job Posting":
        return <div>Settings content here</div>;
      default:
        return <div>Select a module from the sidebar</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6 flex">
      <div className="w-1/5 bg-white shadow-lg rounded-lg p-4">
        {/* Sidebar */}
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${
              selectedModule === "Users"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedModule("Users")}
          >
            Users
          </li>
          <li
            className={`cursor-pointer ${
              selectedModule === "Events"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
            onClick={() => setSelectedModule("Events")}
          >
            Events
          </li>
        </ul>
      </div>
      <div className="w-4/5 ml-6 bg-white shadow-lg rounded-lg p-6">
        <Navbar />
        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage events and view analytics!
          </p>
        </div>

        {renderModuleContent()}
      </div>
    </div>
  );
}
