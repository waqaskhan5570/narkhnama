import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import FileComplaint from "./pages/FileComplaint/FileComplaint";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Profile from "./pages/Auth/Profile/Profile";
import NarkhnamaPortal from "./pages/NarkhnamaPortal/NarkhnamaPortal";
import ProtectedUserRoute from "./utils/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-narkhnama" element={<About />} />
      <Route
        path="/file-complaint"
        element={
          <ProtectedUserRoute isAuthenticated={isAuthenticated}>
            <FileComplaint />
          </ProtectedUserRoute>
        }
      />
      <Route
        path="/citizen-profile"
        element={
          <ProtectedUserRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedUserRoute>
        }
      />
      <Route path="/narkhnama-portal" element={<NarkhnamaPortal />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
