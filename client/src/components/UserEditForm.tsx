import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import close from "../assets/close.png";
import greenTick from "../assets/greenTick.png";
import warning from "../assets/warning.png";

type UserFormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  mobile: string;
  aadhar: string;
  gender: string;
  email: string;
  address: string;
  state: string;
  district: string;
  pincode: string;
  parentGuardianName: string;
  parentGuardianNumber: string;
};



interface UserEditFormProps {
  isOpen: boolean;
  onClose: () => void;
  setUserData: () => void;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ isOpen, onClose,setUserData }) => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    mobile: "",
    aadhar: "",
    gender: "Male",
    email: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    parentGuardianName: "",
    parentGuardianNumber: "",
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/getUser/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setFormData(data.data); // Assuming the API returns the user details in `data.data`
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/user/updateUser/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setUserData(data?.data);
      if (response.ok) {
        onClose();
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the user.");
    }
  };

  if (!isOpen) return null;

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-10 rounded-[20px] rounded-tr-[75px] w-4/10 relative">
        <img
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer h-[40px] w-[40px]"
          src={close}
          alt=""
        />
        <h2 className="text-[20px] font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">
              First Name<span className="text-red">*</span>
            </label>
            <input
              placeholder="Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Last Name<span className="text-red">*</span>
            </label>
            <input
              placeholder="Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">Date of Birth*</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Gender<span className="text-red">*</span>
            </label>
            <div className="flex space-x-2">
              {["Male", "Female", "Non-Binary"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => handleGenderSelect(g)}
                  className={`px-4 py-2 border border-gray rounded-md h-[50px] ${
                    formData.gender === g && "border-orange text-orange"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <label className="block font-semibold">
              Mobile<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
            <img
              src={greenTick}
              alt="Verified"
              className="absolute right-3 top-3/5 h-4 w-4 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
          <div className="relative">
            <label className="block font-semibold">
              Email<span className="text-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
            <img
              src={greenTick}
              alt="Verified"
              className="absolute right-3 top-3/5 h-4 w-4 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
          <div className="relative">
            <label className="block font-semibold">
              Aadhar<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
            <img
              src={warning}
              alt="Verified"
              className="absolute right-3 top-3/5 h-4 w-4 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Address<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              State<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              District<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Pincode <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Parent / Guardian Name
            </label>
            <input
              placeholder="Name"
              type="text"
              name="parentGuardianName"
              value={formData.parentGuardianName}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Parent / Guardian Number
            </label>
            <input
              placeholder="Mobile Number"
              type="text"
              name="parentGuardianNumber"
              value={formData.parentGuardianNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray rounded h-[50px]"
            />
          </div>
          <div className="col-span-2 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#7F7F7F] text-[#7F7F7F] rounded rounded-tr-2xl h-[50px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded rounded-tr-2xl h-[50px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditForm;