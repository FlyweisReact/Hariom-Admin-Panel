/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Message = () => {

  const [message , setMessage] = useState('')

  const sendMsg = async (e) => {
    e.preventDefault();
    try{
      const data = await axios.post('http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/notification' , {message})
        console.log(data)
        toast.success('Notification sended successfully')
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
       Push Notification
          </span>
          
        </div>
  
      </section>
    </>
  );
};

export default HOC(Message);
