/** @format */

import React from "react";
import {
  AiOutlineUsergroupDelete,

} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";

const Dashboard = () => {
  const card = [
    {
      progress: "bg-blue-400",
      title: "All Category",
      number: "10",
      icon: (
        <AiOutlineUsergroupDelete className="text-2xl text-[rgb(240,72,88)]" />
      ),
      bg: "#ff5370",
    },
    {
      progress: "bg-green-400",
      title: "All Product",
      number: "100",
      icon: <FiUser className="text-2xl text-[#4099ff]" />,
      bg: "#4099ff",
    }

  ];
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{ backgroundColor: `${card.bg}` }}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div
                  className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn"
              
                >
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
