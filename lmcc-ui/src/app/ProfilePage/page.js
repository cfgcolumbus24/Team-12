import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mb-8">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* User Information */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-700">
            Software developer with a passion for building impactful applications. Loves exploring new technologies and developing skills in full-stack development.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Log Out
          </button>
        </div>
      </div>

      {/* Masonry Image Gallery */}
      <div className="w-full max-w-4xl px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Photo Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Sample images for the gallery */}
          {Array.from({ length: 12 }).map((_, index) => (
            <img
              key={index}
              src={`https://picsum.photos/300/400?random=${index + 1}`}
              alt={`Random Image ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
