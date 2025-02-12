import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/ViewUser/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
