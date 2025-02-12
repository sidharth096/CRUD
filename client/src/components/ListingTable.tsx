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

  // Fetch users function
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

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewClick = (id: string) => navigate(`/ViewUser/${id}`);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <>
      <div className="flex justify-between items-center px-10">
        <h1 className="text-center text-3xl font-semibold mt-6">Users</h1>
        <button
          className="bg-[#198FD9] text-white py-2 px-4 rounded-lg mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
      </div>
      <div className="flex flex-col px-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user._id} className="cursor-pointer hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user._id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.firstName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewClick(user._id);
                        }}
                      >
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <UserAddForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} refreshUsers={fetchUsers} />
      )}
    </>
  );
};

export default ListingTable;
