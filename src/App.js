import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
import AdminProtectedRoute from "./utils/ProtectedRoute/AdminProtectedRoute";

import PriceLists from "./pages/PriceLists/PriceLists";
import SinglePriceList from "./pages/SinglePriceList/SinglePriceList";
// admin pages
import AdminAuth from "./pages/AdminPages/AdminAuth/AdminAuth";
import Dashboard from "./pages/AdminPages/Dashboard/Dashboard";
import Narkhnamas from "./pages/AdminPages/Narkhnamas/Narkhnamas";
import SingleNarkhnama from "./pages/AdminPages/SingleNarkhnama/SingleNarkhnama";
import AddNarkhnama from "./pages/AdminPages/AddNarkhnama/AddNarkhnama";
import EditNarkhnama from "./pages/AdminPages/EditNarkhnama/EditNarkhnama";
import Complaints from "./pages/AdminPages/Complaints/Complaints";
import Districts from "./pages/AdminPages/Districts/Districts";

function App() {
  const { isAuthenticated, isAdminAuthenticated } = useSelector(
    (state) => state.auth
  );
  return (
    <div>
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
          path="/price-lists/:listType/:id"
          element={<SinglePriceList />}
        />
        {/* admin dashboard routes */}
        <Route path="/admin-panel/auth" element={<AdminAuth />} />
        <Route
          path="/admin-panel/dashboard"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <Dashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-panel/narkhnamas"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <Narkhnamas />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-panel/narkhnamas/:id"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <SingleNarkhnama />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-panel/narkhnamas/add-narkhnama"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <AddNarkhnama />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin-panel/narkhnamas/edit-narkhnama/:id"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <EditNarkhnama />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-panel/complaints"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <Complaints />
            </AdminProtectedRoute>
          }
        />

        <Route
          path="/admin-panel/districts"
          element={
            <AdminProtectedRoute isAdminAuthenticated={isAdminAuthenticated}>
              <Districts />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
