/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Support = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/support/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function EditModal(props) {
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Whatsapp, setW] = useState("");
    const [zipcode, setZip] = useState("");

    const editHndler = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.patch(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/support/63a2ddd3fa4a64d08eba314f",
          {
            Phone,
            Email,
            Whatsapp,
            zipcode,
          }
        );
        console.log(data);
        toast.success("Support Edited Successfully");
        setOpen(false);
        fetchHandler();
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
            Edit Support
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editHndler}>
            <Form.Group>
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                placeholder="1245369870"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email.</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Whatsapp No.</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{10}"
                onChange={(e) => setW(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{6}"
                onChange={(e) => setZip(e.target.value)}
              />
            </Form.Group>

            <button
              style={{
                backgroundColor: "#4099ff",
                borderRadius: "0",
                color: "white",
                padding: "5px",
                fontSize: "1.4rem",
                width: "200px",
                marginTop: "10px",
              }}
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <EditModal show={open} onHide={() => setOpen(false)} />

      <div style={{ color: "black" }}>
        <p style={{ fontSize: "1.6rem" }}>Support</p>
      </div>

      <Table striped bordered hover>
        <thead>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Whatsapp No.</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>945642656</td>
            <td>support@gmail.com</td>
            <td>945642656</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Support);
