import { useParams } from "react-router-dom";
import NavBar from "../components/NaveBar";
import ProfileSideBar from "../components/ProfileSideBar";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  
  return (
    <>
     <NavBar/>
     <ProfileSideBar/>
    </>
   
  )
};

export default UserDetailPage;
