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


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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
                <th>Image</th>
                <th>Name</th>
              <th>Description</th>
              <th>Language</th>
              <th>Experience</th>
              <th>Rating</th>
              <th>Price per min</th>
              <th>Discounted Price per min</th>
              <th></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
            
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Astrologers);
