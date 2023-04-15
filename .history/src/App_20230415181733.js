/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorLogin from "./vendorPanel/forms/VendorLogin";
import AdminDiscount from "./vendorPanel/pages/AdminDiscount";
import AdminReview from "./vendorPanel/pages/AdminReview";
import Astrologers from "./vendorPanel/pages/Astrologers";
import Banners from "./vendorPanel/pages/Banners";
import Booking from "./vendorPanel/pages/Booking";
import Horoscope from "./vendorPanel/pages/Horoscope";
import Kundli from "./vendorPanel/pages/Kundli";
import Message from "./vendorPanel/pages/Message";
import UploadDocs from "./vendorPanel/pages/UploadDocs";
import Users from "./vendorPanel/pages/Users";
import VendorDashboard from "./vendorPanel/pages/VendorDashboard.jsx";
import AdminUsers from "./vendorPanel/pages/AdminUsers";
import AdminBlogs from "./vendorPanel/pages/AdminBlogs";
import AdminCategory from "./vendorPanel/pages/AdminCategory";
import Support from "./vendorPanel/pages/Support";
import AdminTerms from "./vendorPanel/pages/AdminTerms";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import ECategory from "./E-CommerceAdmin/pages/ECategory";
import EProduct from "./E-CommerceAdmin/pages/EProduct";
import EVendorLogin from './E-CommerceVendor/forms/EVendorLogin'
import EVDashboard from "./E-CommerceVendor/pages/EVDashboard";
function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* Astrologer Admin Panel */}
        <Route path="/" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/astro" element={<Astrologers />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/horo" element={<Horoscope />} />
        <Route path="/adminReviews" element={<AdminReview />} />
        <Route path="/uploadDocs" element={<UploadDocs />} />
        <Route path="/Banners" element={<Banners />} />
        <Route path="/AdminDiscount" element={<AdminDiscount />} />
        <Route path="/msg" element={<Message />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/privacy-policy" element={<Users />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/support" element={<Support />} />
        <Route path="/admin/terms" element={<AdminTerms />} />
        {/* ----------------------------------------- */}

        {/* E-Commerce Admin Panel */}
          <Route path="/E-Commerce/login" element={<Login />} />
          <Route path="/E-Commerce/dashboard" element={<Dashboard />} />
          <Route path="/E-Commerce/Category" element={<ECategory />} />
          <Route path="/E-Commerce/Product" element={<EProduct />} />
        {/* ------------------------------- */}


        {/* E-Commerce Vendor Panel */}
        <Route path="/E-Commerce/vendor/login" element={<EVendorLogin />} />
        <Route path="/E-Commerce/vendor/dashboard" element={<EVDashboard />} />

        {/* ------------------------------ */}
      </Routes>
    </>
  );
}

export default App;
