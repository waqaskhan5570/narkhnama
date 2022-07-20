import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

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
import PriceLists from "./pages/PriceLists/PriceLists";
import SinglePriceList from "./pages/SinglePriceList/SinglePriceList";
// admin pages
import Dashboard from "./pages/AdminPages/Dashboard/Dashboard";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
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
      <Route path="/price-lists" element={<PriceLists />} />
      <Route path="/price-lists/:listType" element={<SinglePriceList />} />
      <Route
        path="/price-lists/:listType/:date"
        element={<SinglePriceList />}
      />

      {/* admin dashboard routes */}
      <Route
        path="/admin-panel/dashboard"
        element={
          <ProtectedUserRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedUserRoute>
        }
      />
    </Routes>
  );
}

export default App;
