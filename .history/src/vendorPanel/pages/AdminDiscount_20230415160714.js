/** @format */

import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../layout/HOC";
import { toast } from "react-toastify";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const AdminDiscount = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [editA, setP] = useState(false);
  const [id, setID] = useState("");

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/discount/"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axios]);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/discount/${id}`
      );
      toast.success("Discount Deleted Successfully");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // Modal ---
  function MyVerticallyCenteredModal(props) {
    const [code, setC] = useState("");
    const [activeDate, setA] = useState("");
    const [expireDate, setE] = useState("");
    const [percent, setP] = useState("");

    // Add Kundli
    const addKundli = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/discount/",
          {
            code,
            activeDate,
            expireDate,
            percent,
          }
        );
        toast.success("Discount Added SuccessFully");
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log("add Discount err => ", err);
      }
    };

    // Edit Astrologer
    const editAstro = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:3002/discount/${id}`,
          {
            code,
            activeDate,
            expireDate,
            percent,
          }
        );
        toast.success("Discount Added SuccessFully");
        setModalShow(false);
        fetchData();
      } catch (err) {
        console.log("add Discount err => ", err);
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
            {editA ? "Edit Discount" : " Add Discount"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editA ? editAstro : addKundli}>
            <Form.Group>
              <Form.Label>Coupon Code</Form.Label>
              <Form.Control
                type="text"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="text"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Activation Date</Form.Label>
              <Form.Control
                type="date"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="date"
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Discounts
          </span>
          <button
            onClick={() => {
              setP(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Discounts
          </button>
        </div>

        <Container
          className="wcomp overflow-x-auto"
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody >
              
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AdminDiscount);