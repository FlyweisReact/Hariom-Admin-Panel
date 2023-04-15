/** @format */

import { AiFillDelete } from "react-icons/ai";
import HOC from "../layout/HOC";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Users = () => {
  const token = localStorage.getItem("AdminToken");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/allusers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const deleteUser = async (name) => {
    try{
        const data = await axios.delete(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/userdelete/${name}` , {
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        console.log(data)
        toast.success('User Deleted Successfully')
        fetchData()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>

        <div
      
          style={{ marginTop: "2%" , overflowX : 'auto' }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
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
