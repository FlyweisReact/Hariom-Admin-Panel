/** @format */

import React  from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const Message = () => {
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
            {" "}
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Notification</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

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


<p className="headP">Dashboard / Push Notification</p>

      <section>
        <div  className="pb-4   w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}>
          <span >
            Push Notification
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Notification
          </button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Notification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
                Wikipedia
              </td>
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

export default HOC(Message);
