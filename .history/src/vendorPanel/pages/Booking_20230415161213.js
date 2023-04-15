/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const Booking = () => {

  const [data , setData] = useState([])

  const fetchData = async () => {
    try{
      const {data} = await axios.get('http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/order')
      setData(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's (Total : {data?.details?.length})
          </span>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>User</th>
                <th>Astrologer</th>
                <th>Time</th>
        
                <th>About</th>
                <th>Language</th>
                <th>Rashi</th>
              </tr>
            </thead>
         
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(Booking);
