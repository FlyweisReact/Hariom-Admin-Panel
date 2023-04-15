/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";

const Horoscope = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const Lorem = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  "

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            ALl Horoscopes
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Horoscropes
          </button>
        </div>

     
          <Table  striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Horoscope</th>
                <th>Profession</th>
                <th>Emotions</th>
                <th>Health</th>
                <th>Travel</th>
                <th>Luck</th>
             
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             <tr>
              <td> {Lorem.} </td>
             </tr>
            </tbody>
          </Table>
      </section>
    </>
  );
};

export default HOC(Horoscope);
