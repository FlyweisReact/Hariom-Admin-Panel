/** @format */

import React, { useCallback, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import {  Table, Modal, Form, Button } from "react-bootstrap";

const Astrologers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [editA, setP] = useState(false);

  function MyVerticallyCenteredModal(props) {
    // -----------------------------------------
 

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {editA ? "Edit Astrolger" : " Add Astrologer"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
             
              />
            </Form.Group>
           
            <br />
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // Fee Modal
  function FeeModal(props) {
    const [fees, setFees] = useState("");

    // Add Astrologer Fess
    const addFees = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/admin/fees/${id}`,
          {
            fees,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Fees Added successfully");
        fetchData();
        setOpen(false);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Astrologer Fees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addFees}>
            <Form.Group>
              <Form.Label>Fees</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setFees(e.target.value)}
              />
            </Form.Group>
            <Button style={{marginTop : '1%' , borderRadius : '0'}} type='submit'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <FeeModal show={open} onHide={() => setOpen(false)} />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Astrologers
          </span>
          <button
            onClick={() => {
              setP(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Astrologers
          </button>
        </div>

        <div className="wcomp overflow-x-auto" style={{ marginTop: "2%" }}>
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Description </th>
                <th>Email</th>
                <th>Language</th>
                <th>Mobile Number</th>
                <th>Pin Code</th>
                <th>Rashi</th>
                <th>Skills</th>
                <td>Fees</td>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {data?.details?.map((i, index) => (
                <tr key={index}>
                  <td>{i.firstName + " " + i.lastName}</td>
                  <td>{i.address}</td>
                  <td>{i.country}</td>
                  <td>{i.desc}</td>
                  <td>{i.email}</td>
                  <td>
                    {i.language?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>
                  <td>{i.mobile}</td>
                  <td>{i.pincode}</td>
                  <td>{i.rashi}</td>
                  <td>
                    {i.skills?.map((a, index) => (
                      <p key={index}> {a} </p>
                    ))}
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        setID(i._id);
                        setOpen(true);
                      }}
                    >
                      Add Fee
                    </Button>
                  </td>
                  <td>
                    <span style={{ display: "flex", gap: "20px" }}>
                      {" "}
                      <AiFillEdit
                        cursor="pointer"
                        color="blue"
                        onClick={() => {
                          setID(i._id);
                          setP(true);
                          setModalShow(true);
                        }}
                      />{" "}
                      <AiFillDelete
                        cursor="pointer"
                        color="red"
                        onClick={() => deleteAstro(i._id)}
                      />{" "}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Astrologers);
