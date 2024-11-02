"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";

export default function AdminDashboard() {
  // Sample user data
  const initialUsers = [
    { id: 1, name: "John Doe", createdAt: "2024-01-15", role: "Alumni" },
    { id: 2, name: "Jane Smith", createdAt: "2024-02-10", role: "Member" },
    { id: 3, name: "Bob Johnson", createdAt: "2024-03-05", role: "Guest" },
    { id: 4, name: "Alice Brown", createdAt: "2024-04-20", role: "Alumni" },
    { id: 5, name: "Charlie White", createdAt: "2024-05-25", role: "Member" },
    { id: 6, name: "Diana Prince", createdAt: "2024-06-15", role: "Guest" },
    { id: 7, name: "Elena Gilbert", createdAt: "2024-07-10", role: "Alumni" },
    { id: 8, name: "Frank Castle", createdAt: "2024-08-20", role: "Member" },
    { id: 9, name: "Grace Hopper", createdAt: "2024-09-15", role: "Guest" },
    { id: 10, name: "Hank Pym", createdAt: "2024-10-05", role: "Alumni" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (sortField) => {
    setSortBy(sortField);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Function to sort users based on selected field and order
  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />
        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage events and view analytics!</p>
        </div>

        {/* Sort Dropdowns */}
        <div className="flex space-x-2 mb-6">
          <select
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="createdAt">Date Created</option>
            <option value="role">Role</option>
          </select>
          <select
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto mt-6">
          <div className="max-h-60 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.createdAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
