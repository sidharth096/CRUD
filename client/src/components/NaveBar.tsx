import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">101.52.9.92</span>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-8">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-600">AUDITIONAL</span>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">BEGINNING</span>
              <span className="text-sm text-gray-500">PROGRAMMING</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            <button className="text-sm font-semibold text-gray-600 hover:text-gray-800">Jobs</button>
            <div className="flex space-x-2">
              <span className="text-sm text-gray-500">Internship</span>
              <span className="text-sm text-gray-500">Job Fair</span>
              <span className="text-sm text-gray-500">Companies</span>
              <span className="text-sm text-gray-500">Support</span>
            </div>
          </div>
          <button className="text-sm font-semibold text-gray-600 hover:text-gray-800">HIP</button>
          <span className="text-sm text-gray-500">Abhishek S...</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;