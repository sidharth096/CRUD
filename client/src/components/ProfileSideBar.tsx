const ProfileSideBar = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Aphishek Shankar</h1>
        <p className="text-sm text-gray-600 mt-2">+919876543210</p>
        <p className="text-sm text-gray-600">abhishekshankar123@gmail.com</p>
      </div>

      <div className="mt-6">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          Edit/Update Profile
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-700">My Profile</span>
          <span className="text-sm text-gray-500">&#8594;</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-700">Payments</span>
          <span className="text-sm text-gray-500">&#8594;</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-700">Application Status</span>
          <span className="text-sm text-gray-500">&#8594;</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-700">Logout</span>
          <span className="text-sm text-gray-500">&#8594;</span>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Last updated on 10 Oct 2024
      </div>
    </div>
  );
};

export default ProfileSideBar;
