/** @format */

import { AiFillDelete } from "react-icons/ai";
import HOC from "../layout/HOC";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const token = localStorage.getItem("AdminToken");


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Privacy Policy
          </span>
        </div>

        <div
      
          style={{ overflowX : 'auto' }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Country</th>
                <th>State</th>
                <th>District</th>
                <th>Pincode</th>
                <th>Languages</th>
                <th>Description</th>
                <th>Rashi</th>
                <th>Skills</th>
                <th>Refer Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody >
        
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
