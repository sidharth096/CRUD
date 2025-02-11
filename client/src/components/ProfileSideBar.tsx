import { FaPhone, FaEnvelope, FaUser, FaMoneyBill, FaClipboardList, FaSignOutAlt, FaEdit } from "react-icons/fa";
import frame from "../assets/frame.png"
import greenTick from "../assets/greenTick.png"
import warning from "../assets/warning.png"

const ProfileSideBar = () => {
  return (
    <div className="bg-white border border-[#EEEEEE] rounded-lg p-6 max-w-sm  mt-10 w-[290px] ">
      
      {/* Profile Image & Completion */}
      <div className="text-center relative">
        <div className="w-24 h-24 mx-auto rounded-full border-4 border-dashed border-[#FFC422] p-1">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="absolute top-2 right-2  p-1 rounded-full">
          <img className="w-[32px] h-[32px]" src={frame} alt="" />
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-bold text-gray-800">Abhishek Shankar</h1>
          <p className="text-sm text-gray-500">@abhisheks2024</p>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 flex items-center justify-center space-x-2">
          <div className="w-28 h-2 bg-gray-200 rounded-full">
            <div className="w-[60%] h-full bg-[#FFC422] rounded-full"></div>
          </div>
          <span className="text-sm text-gray-600 font-semibold">60%</span>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-700">
          <FaPhone className="text-lg mr-2" />
          <span className="text-sm">+91 9876543210</span>
          <img className="w-[18px] h-[18px]" src={greenTick} alt="" />
        </div>
        <div className="flex items-center text-gray-700">
          <FaEnvelope className="text-lg mr-2" />
          <span className="text-sm">abhishekshankar123@gmail.com</span>
          <img className="w-[18px] h-[18px]" src={warning} alt="" />
        </div>
      </div>

      {/* Edit Profile Link */}
      <div className="mt-4 text-center">
        <button className="text-blue-500 font-medium text-sm flex items-center justify-center">
          <FaEdit className="mr-1" />
          Edit/Update Profile
        </button>
      </div>

      {/* Profile Options */}
      <div className="mt-6 space-y-3 p-3 bg-[#F26F220D] rounded-lg">
        <div className="flex items-center space-x-3 text-gray-700 font-medium">
          <FaUser />
          <span className="text-[#FF7F2D] ">My Profile</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <FaMoneyBill />
          <span>Payments</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <FaClipboardList />
          <span>Application Status</span>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-4">
        <button className="w-2/3 flex items-center justify-center space-x-2 border-2 border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

      {/* Last Updated */}
      <div className="mt-4 text-center text-sm text-gray-500">
        Last updated on <span className="font-medium">10 Oct 2024</span>
      </div>

    </div>
  );
};

export default ProfileSideBar;
