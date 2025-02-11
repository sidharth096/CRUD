import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-white border-b-1 border-[#EEEEEE] flex items-center justify-between  h-[100px] px-2">
      
      {/* Left Section */}
      <div className="flex gap-8 items-center">
          <div className="flex items-center gap-4">
        <img className="w-[182px] h-[80px]" src={logo} alt="ASAP Logo" />
      </div> 
      <div className="flex space-x-6">
        <span className="text-sm text-gray-700 font-[400] cursor-pointer hover:text-gray-900">Jobs</span>
        <span className="text-sm text-gray-700 font-[400] cursor-pointer hover:text-gray-900">Internship</span>
        <span className="text-sm text-gray-700 font-[400] cursor-pointer hover:text-gray-900">Job Fair</span>
        <span className="text-sm text-gray-700 font-[400] cursor-pointer hover:text-gray-900">Companies</span>
        <span className="text-sm text-gray-700 font-[400] cursor-pointer hover:text-gray-900">Support</span>
      </div>
      </div>
    


     

      {/* Right Section - Profile */}
      <div className="flex items-center space-x-3">
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
