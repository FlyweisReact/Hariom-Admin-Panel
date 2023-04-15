/** @format */

import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const VendorLogin = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      navigate("/vendorDashboard");
      toast.success("Welcome Admin ");
      setLoading(false);
    } catch (err) {
      console.log("Admin Login err => ", err);
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center "
        style={{ backgroundColor: "#2b7a8e" }}
      >
        <form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 ">
          <p className="text-3xl text-orange-600"> Admin Panel </p>
          <section className="py-7">
            {/* Email */}
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type="email"
                placeholder="admin@gmail.com"
                required
                className="outline-none px-0.5  bg-transparent tracking-wider w-full"
              />
              <AiOutlineMail className="text-xl " />
            </div>
            {/* Password */}
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type={inputpass ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="outline-none px-0.5  bg-transparent tracking-wider w-full mt-2 "
              />

              <span
                onClick={() => {
                  setPass(!pass);
                  setInputpass(!inputpass);
                }}
                className="text-xl cursor-pointer hover:scale-90 "
              >
                {pass ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            <button
              type="submit"
              className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium  mt-5 "
              onClick={submitHandler}
            >
              {loading ? (
                <Oval height={30} secondaryColor="black" color="black" />
              ) : (
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    LOG In
                  </span>

                  <BiLogInCircle className="pl-1.5 text-2xl" />
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium mt-1 "
            >
              Astrologer Panel
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium  mt-1  "
            >
              Astrologer Panel
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default VendorLogin;
