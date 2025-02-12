import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#EEEEEE] flex items-center justify-between h-[100px] px-4 md:px-8 relative">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img className="w-[150px] h-[60px] md:w-[182px] md:h-[80px]" src={logo} alt="ASAP Logo" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 md:relative md:top-0 md:flex md:flex-row md:space-x-6 md:space-y-0 md:bg-transparent md:shadow-none md:py-0 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <span className="text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">Jobs</span>
        <span className="text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">Internship</span>
        <span className="text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">Job Fair</span>
        <span className="text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">Companies</span>
        <span className="text-sm text-gray-700 font-medium cursor-pointer hover:text-gray-900">Support</span>
      </div>

      {/* Right Section - Profile */}
      <div className="hidden md:flex items-center space-x-3">
        <button className="text-sm font-semibold text-white bg-[#F9444A] rounded-full w-10 h-10 flex items-center justify-center">
          A
        </button>
        <div className="leading-tight">
          <p className="text-xs text-gray-500">Hi,</p>
          <span className="text-sm font-medium text-gray-700">Abhishek S...</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
