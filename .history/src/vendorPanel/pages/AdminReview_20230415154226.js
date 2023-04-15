/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const AdminReview = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Testimonials
          </span>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Review</th>
              <th>Create At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167"
                  alt=""
                  style={{ width: "50px", height : '50px' , borderRadius: "100%" }}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(AdminReview);
