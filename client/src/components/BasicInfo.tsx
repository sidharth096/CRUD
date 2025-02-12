import { FaCheckCircle } from "react-icons/fa";
import payment from "../assets/payment.png";

interface BasicInfoProps {
  userData: {
    firstName: string;
    dateOfBirth: string;
    mobile: string;
    email: string;
    aadhar: string;
    address: string;
  };
}

const BasicInfo: React.FC<BasicInfoProps> = ({ userData }) => {
  return (
    <div className="mt-10 flex flex-col xl:flex-row  gap-6">
      {/* Left Content */}
      <div className="flex-1  md:w-auto max-w-3xl">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Basic Information
          </h2>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
            Update
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg border border-[#EEEEEE]">
          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-4 text-gray-700">
            <div>
              <p className="font-medium">Full Name</p>
              <p>{userData.firstName}</p>
            </div>
            <div>
              <p className="font-medium">Date of Birth</p>
              <p>{userData.dateOfBirth}</p>
            </div>
            <div>
              <p className="font-medium">Mobile</p>
              <p className="flex items-center">
                {userData.mobile}{" "}
                <FaCheckCircle className="text-green-500 ml-1" />
              </p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="flex items-center">
                {userData.email}{" "}
                <FaCheckCircle className="text-green-500 ml-1" />
              </p>
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-medium">Aadhar</p>
                <p>{userData.aadhar}</p>
              </div>
              <button className="ml-2 text-sm text-white bg-red-500 px-2 py-1 rounded-lg">
                Verify
              </button>
            </div>
            <div className="col-span-2">
              <p className="font-medium">Address</p>
              <p>{userData.address}</p>
            </div>
          </div>

          {/* Payment Pending Section */}
          <div className="mt-6 bg-green-100 p-4 rounded-lg flex items-center justify-between w-full">
            <img
              className="h-[80px] w-[80px] object-contain"
              src={payment}
              alt="Payment Pending"
            />

            <div className="flex-1 ml-4">
              <p className="text-md font-medium text-gray-800 whitespace-nowrap">
                Payment Pending
              </p>
              <p className="text-sm text-gray-600">
                Registration fee 500 rupees pending.
                <br />
                Pay now and get access to all services.
              </p>
            </div>

            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600">
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-[250px] flex flex-col "> 
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <span className="text-gray border-[#9420CA] border-4 rounded-full w-4 h-4 flex items-center justify-center">
            •
          </span>
          Basic Information
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Education
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Career Objective
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Key Skills
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Resume/Portfolio
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Preferences
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Work Experience
          </li>
          <li className="cursor-pointer flex items-center gap-2">
            <span className="text-gray">•</span> Additional Documents
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicInfo;
