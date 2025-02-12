import { useParams } from "react-router-dom";
import NavBar from "../components/NaveBar";
import ProfileSideBar from "../components/ProfileSideBar";
import BasicInfo from "../components/BasicInfo";
import Education from "../components/Education";
import KeySkills from "../components/KeySkill";
import PortfolioExperience from "../components/PortFolioExperience";
import { useEffect, useState } from "react";

// Define the UserFormData Type
interface UserFormData {
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
}

const UserDetailPage = () => {
  const [userData, setUserData] = useState<UserFormData>({
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
  const { id } = useParams(); // Correct way to get params

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
        setUserData(data.data); // Assuming API returns { data: userData }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserDetails(); // Only fetch if id is present
  }, [id]);

  return (
    <>
      <NavBar />

      <div className="px-6 sm:px-10 xl:px-[70px]">
        <div className="flex  gap-6 xl:gap-10">
          <ProfileSideBar userData={userData} setUserData={setUserData} />
          <div className="flex flex-col gap-6">
            <BasicInfo userData={userData}  />
            <Education />
            <KeySkills />
            <PortfolioExperience />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
