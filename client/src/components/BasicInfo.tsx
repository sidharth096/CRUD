import { FaCheckCircle } from "react-icons/fa";
import payment from "../assets/payment.png";

const BasicInfo = () => {
  return (
    <div className="mt-10 flex justify-between gap-6">
      {/* Left Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">
            Basic Information
          </h2>
          <button className="text-sm text-[#198FD9] bg-[#198FD91A] px-3 py-1 rounded-lg">
            Update
          </button>
        </div>
        <div className="max-w-3xl p-6 bg-white rounded-lg border border-[#EEEEEE]">
          {/* Information Grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-4 text-gray-700">
            <div>
              <p className="font-medium">Full Name</p>
              <p>Abhishek Shankar</p>
            </div>
            <div>
              <p className="font-medium">Date of Birth</p>
              <p>18/10/1999</p>
            </div>
            <div>
              <p className="font-medium">Mobile</p>
              <p className="flex items-center">
                +91 9876543210 <FaCheckCircle className="text-green-500 ml-1" />
              </p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="flex items-center">
                abhishekshankar123@gmail.com{" "}
                <FaCheckCircle className="text-green-500 ml-1" />
              </p>
            </div>
            <div className="flex items-center">
              <div>
                <p className="font-medium">Aadhar</p>
                <p>33XX XXXX XXXX XX22</p>
              </div>
              <button className="ml-2 text-sm text-white bg-red-500 px-2 py-1 rounded-lg">
                Verify
              </button>
            </div>
            <div className="col-span-2">
              <p className="font-medium">Address</p>
              <p>
                Sweet Home, Evergreen Street, Varkkala, Thiruvananthapuram,
                Kerala, 695001, India
              </p>
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
      <div className="w-[250px] bg-white p-4 rounded-lg shadow border border-[#EEEEEE]">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Basic Information
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li className="text-[#333] font-medium">Basic Information</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Education</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Career Objective</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Key Skills</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Resume/Portfolio</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Preferences</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Work Experience</li>
          <li className="hover:text-[#198FD9] cursor-pointer">Additional Documents</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicInfo;
