"use client";

import Navbar from "@/components/ui/Navbar";

export default function AdminDashboard() {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      createdAt: "2024-01-15",
      role: "Alumni",
    },
    {
      id: 2,
      name: "Jane Smith",
      createdAt: "2024-02-10",
      role: "Member",
    },
    {
      id: 3,
      name: "Bob Johnson",
      createdAt: "2024-03-05",
      role: "Guest",
    },
    {
      id: 4,
      name: "Alice Brown",
      createdAt: "2024-04-20",
      role: "Alumni",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Navbar />
        <div className="my-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage events and view analytics!</p>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto mt-6">
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
              {users.map((user) => (
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
  );
}
