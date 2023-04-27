/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const AdminReview = () => {
  const Lorem =
    "IIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia  ";
  return (
    <>
      <p className="headP">Dashboard / Feedback</p>
      <section>
        <div   className="pb-4   w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}>
          <span  className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }} >
            All FeedBacks
          </span>
        </div>



        <section className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search for products"
          />
        </div>

        <div className="overFlowCont">
        <Table >
          <thead>
            <tr>
              <th>Image</th>
              <th>Image</th>
              <th>Review</th>
              <th>Create At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://cdn.shopify.com/s/files/1/0850/2114/files/tips_to_help_heighten_senses_480x480.png?v=1624399167"
                  alt=""
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "100%",
                  }}
                />
              </td>
              <td>{Lorem.substring(0, 100) + "..."}</td>
              <td>12 March 2023</td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-trash" />
                  <i className="fa-solid fa-eye" />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
        </section>
      </section>
    </>
  );
};

export default HOC(AdminReview);
