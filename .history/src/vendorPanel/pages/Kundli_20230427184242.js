/** @format */

import React, { useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Kundli = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [open, setOpen] = useState(false);

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
            Add Kundli
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Open to select user</option>
              <option value="">User</option>
              <option value="">User2</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>Kundli</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>

            <Button    style={{ backgroundColor: "#2b7a8e", borderRadius: "0" , border : '1px solid #2b7a8e' }} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function ViewDocument(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "0" }}></Modal.Header>
        <Modal.Body>
          <img
            src={"https://www.astrosage.com/kundli/images/kundali.jpg"}
            alt=""
            style={{ width: "100%" }}
          />
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
      <ViewDocument show={open} onHide={() => setOpen(false)} />

      <p className="headP">Dashboard / Kundli</p>

      <section>
        <div   className="pb-4   w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}>
          <span       className="tracking-widest text-slate-900 font-semibold uppercase"
          style={{ fontSize: "1.5rem" }}>
            All Kundli's (Total : 1 )
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#2b7a8e] text-white tracking-wider uppercase"
          >
            Add Kundli
          </button>
        </div>

        <section className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search "
          />
        </div>

        <div className="overFlowCont">
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User</td>
              <td>
                <img
                  src="https://www.astrosage.com/kundli/images/kundali.jpg"
                  alt=""
                  style={{ width: "60px" , cursor : 'pointer' }}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </td>
              <td>
                <i className="fa-solid fa-trash" onClick={() => toast.success("Kundli Deleted Successfully")} />
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
        </section>
      </section>
    </>
  );
};

export default HOC(Kundli);
