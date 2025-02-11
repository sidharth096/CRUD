import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
import UserEditPage from "./pages/UserEditPage";
import UserAddPage from "./pages/UserAddPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/addUser" element={<UserAddPage />} />
          <Route path="/EditUser/:id" element={<UserEditPage />} />
          <Route path="/ViewUser/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
