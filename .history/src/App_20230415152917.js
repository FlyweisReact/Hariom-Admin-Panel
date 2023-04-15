/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorLogin from './vendorPanel/forms/VendorLogin'
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
import VendorDashboard from './vendorPanel/pages/VendorDashboard.jsx'
import AdminUsers from './vendorPanel/pages/A'

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
        <Route path="/Banners" element={<Banners />} />
        <Route path="/AdminDiscount" element={<AdminDiscount />} />
        <Route path="/msg" element={<Message />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/support" element={<Suppor />} /> */}
        {/* <Route path="/product" element={<Product/>} /> */}
        {/* <Route path="/testimonial" element={<Testimonial />} /> */}


        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path='/admin/blogs' element={<AdminBlogs />} />
        <Route path="/admin/category" element={<AdminCategory />} />
      </Routes>
    </>
  );
}

export default App;
