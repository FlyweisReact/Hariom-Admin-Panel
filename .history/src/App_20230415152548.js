/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorLogin from './vendorPanel/forms/VendorLogin'
import AdminReview from "./vendorPanel/pages/AdminReview";
import Astrologers from "./vendorPanel/pages/Astrologers";
import Horoscope from "./vendorPanel/pages/Horoscope";
import Kundli from "./vendorPanel/pages/Kundli";
import UploadDocs from "./vendorPanel/pages/UploadDocs";
import VendorDashboard from './vendorPanel/pages/VendorDashboard.jsx'

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/astro" element={<Astrologers />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/horo" element={<Horoscope />} />
        <Route path="/adminReviews" element={<AdminReview />} />
        <Route path="/uploadDocs" element={<UploadDocs />} />
        <Route path="/Banners" element={<Ban />} />
        <Route path="/AdminDiscount" element={<AdminDiscount />} />
        <Route path="/msg" element={<MSG />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/users" element={<Users />} />
        <Route path="/support" element={<Support />} />
        <Route path="/product" element={<Product />} />
        <Route path="/testimonial" element={<Testimonial />} />


        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path='/admin/blogs' element={<AdminBlogs />} />
        <Route path="/admin/category" element={<AdminCategory />} />
      </Routes>
    </>
  );
}

export default App;
