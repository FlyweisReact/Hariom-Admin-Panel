/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/vendorDashboard",
      name: "Dashboard",
    },
    {
      icon: <BsFillPeopleFill className="text-xl mr-3 rounded-full " />,
      link: "/admin/users",
      name: "Users",
    },
    {
      icon: <BsFillPeopleFill className="text-xl mr-3 rounded-full " />,
      link: "/astro",
      name: "Astrologers",
    },
    {
      icon: <BsGlobe2 className="text-xl mr-3 rounded-full " />,
      link: "/horo",
      name: "Horoscope",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/kundli",
      name: "Kundli",
    },

    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/AdminDiscount",
      name: "Coupon's",
    },
  

    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/msg",
      name: "Notification",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/Banners",
      name: "Banners",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/admin/blogs",
      name: "Blogs",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/book",
      name: "Booking's",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/adminReviews",
      name: "Feedback",
    },
    {
      icon: <AiFillMessage className="text-xl mr-3 rounded-full " />,
      link: "/admin/terms",
      name: "Terms & Condition",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/admin/support",
      name: "Support",
    },
    {
      icon: <ImUsers className="text-xl mr-3 rounded-full " />,
      link: "/privacy-policy",
      name: "Privacy Policy",
    },
  
  ];

  const logOut = () => {
    localStorage.removeItem("AdminToken");
    navigate("/");
  };

  return (
    <>
      <aside
        className="p-4 h-auto"
        style={{ backgroundColor: "#263544", minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
          <span className="font-bold text-[#fff]" style={{ fontSize: "2rem" }}>
            Admin Panel
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                className=""
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
                  style={{ color: "#aac0bb" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#aac0bb" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
