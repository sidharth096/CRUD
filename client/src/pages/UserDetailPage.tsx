import { useParams } from "react-router-dom";
import NavBar from "../components/NaveBar";
import ProfileSideBar from "../components/ProfileSideBar";
import BasicInfo from "../components/BasicInfo";
import Education from "../components/Education";
import KeySkills from "../components/KeySkill";
import PortfolioExperience from "../components/PortFolioExperience";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  return (
    <>
      <NavBar />

      <div className="px-2">
        <div className="flex gap-10">
            <div>
                <ProfileSideBar />
            </div>
            <div>
                <BasicInfo/>
                <Education/>
                <KeySkills/>
                <PortfolioExperience/>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
