/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const Booking = () => {
  return (
    <>

    
<p className="headP">Dashboard / Booking</p>

      <section>
        <div className="pb-4   w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}>
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's
          </span>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Astrologer</th>
              <th>At</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>User</td>
              <td>Astrologer</td>
              <td>12 March 2032</td>
              <td>₹500 </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(Booking);
