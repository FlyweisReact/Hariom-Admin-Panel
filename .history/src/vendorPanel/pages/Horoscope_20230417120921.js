/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Horoscope = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ textTransform: "uppercase" }}
          >
            {" "}
            Add Horoscope
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit ? (
            <>
              <p className="View"> <strong>Professional</strong> : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  </p>
              <p className="View"> <strong>Emotions</strong> : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  </p>
              <p className="View"> <strong>Health</strong> : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  </p>
              <p className="View"> <strong>Finance</strong> : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  </p>
              <p className="View"> <strong>Love</strong> : In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  </p>
              <p className="View"> <strong>Family</strong> : Demo </p>
            </>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Professional</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Emotions</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Health</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Finance</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Love</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Family</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    );
  }

  const Lorem =
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  ";

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
              setEdit(false)
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
            style={{ textTransform: "uppercase" }}
          >
            Add Horoscropes
          </button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Professional</th>
              <th>Emotions</th>
              <th>Health</th>
              <th>Finance</th>
              <th>Love</th>
              <th>Family</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td> {Lorem.substring(0, 50) + "..."} </td>
              <td>
                <span className="d-flex gap-2">
                  <i
                    className="fa-solid fa-trash"
                    onClick={() =>
                      toast.success("Horoscope Deleted Successfully")
                    }
                  />
                  <i className="fa-solid fa-eye" onClick={() => {
                    setEdit(true)
                    setModalShow(true)
                  } } />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(Horoscope);
