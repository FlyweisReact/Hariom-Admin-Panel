/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminDelivery = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Delivery Person{" "}
          </span>
        </div>

            <Table striped bordered hover>
            <thead>
            <tr>
              <th>Profile Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                  alt=""
                  style={{ width: "100px" , borderRadius : '100%' }}
                />
              </td>
              <td>User Name</td>
              <td>User@gmail.com</td>
              <td>7854965412</td>
              
              <td>
                <i className="fa-solid fa-trash" />
              </td>
            </tr>
          </tbody>
            </Table>

      </section>
    </>
  );
};

export default HOC(EAdminDelivery);
