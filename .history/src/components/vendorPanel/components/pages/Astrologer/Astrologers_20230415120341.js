/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button } from "react-bootstrap";

const Astrologers = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
          Add Astrologer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Expert Tag</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const Lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type";

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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Expert Tag</th>
                <th>Name</th>
                <th>Description</th>
                <th>Language</th>
                <th>Experience</th>
                <th>Rating</th>
                <th>Price per min</th>
                <th>Discounted Price per min</th>
                <th>Expertise</th>
                <th>Skills</th>
                <th>Min. of consultation</th>
                <th>About</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://images.pexels.com/photos/7675017/pexels-photo-7675017.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7675017.jpg&fm=jpg"
                    alt=""
                    className="profileImage"
                  />
                </td>
                <td>Love Expert</td>
                <td>Astro Suhani</td>
                <td>Tarot Reading , Psychic Healer , Love Expert</td>
                <td>Hindi ,English , Punjabi</td>
                <td>21 Years</td>
                <td>4.96</td>
                <td>₹20</td>
                <td>₹40</td>
                <td>Tarot , Numerology , Face Reading</td>
                <td>Tarot , Numerology , Face Reading</td>
                <td>66565646</td>
                <td>{Lorem.substring(0, 30) + "..."}</td>
                <td className="d-flex gap-2">
                  <i className="fa-solid fa-trash" /> 
                  <i class="fa-sharp fa-solid fa-eye"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Astrologers);