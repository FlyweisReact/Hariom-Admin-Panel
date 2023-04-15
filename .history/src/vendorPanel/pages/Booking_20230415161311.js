/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";


const Booking = () => {


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's
          </span>
        </div>

 
          <Table  striped bordered hover>
            <thead>
              <tr>
                <th>User</th>
                <th>Astrologer</th>
                <th>At</th>
              </tr>
            </thead>
         
          <tbody></tbody>
          </Table>
      </section>
    </>
  );
};

export default HOC(Booking);
