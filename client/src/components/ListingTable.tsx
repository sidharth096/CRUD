import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAddForm from "./UserAddForm";

interface User {
  _id: string;
  firstName: string;
  email: string;
}

const ListingTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/getAllUsers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setUsers(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewClick = (id: string) => navigate(`/ViewUser/${id}`);

  if (loading) return <div className="text-center text-gray-600 text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-lg">Error: {error}</div>;

  return (
    <>
      <div className="flex justify-between items-center px-10 py-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800">Users</h1>
        <button
          className="bg-red  transition-all text-white py-2 px-6 rounded-lg shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          + Add User
        </button>
      </div>
      <div className="px-10 py-4">
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-[#DC5F00] font-medium hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewClick(user._id);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <UserAddForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} refreshUsers={fetchUsers} />
      )}
    </>
  );
};

export default ListingTable;
