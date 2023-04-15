/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Container, Table, Modal, Form, Button } from "react-bootstrap";


const AdminDiscount = () => {
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
          <Form >
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
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Discounts
          </button>
        </div>

        
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Min. Amount</th>
                <th>Activation Date</th>
                <th>Expiry Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>JUNE24</td>
                <td>50%</td>
                <td>500</td>
                <td>JUNE24</td>
              </tr>
            </tbody>
          </Table>
      </section>
    </>
  );
};

export default HOC(AdminDiscount);