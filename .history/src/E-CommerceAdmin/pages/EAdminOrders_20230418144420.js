/** @format */

import React, { useState } from "react";
import { Badge, Button, Form, Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminOrders = () => {
  const [modalShow, setModalShow] = useState(false);

  function EditStatus(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>--Edit Status--</option>
              <option value="1">Shipped</option>
              <option value="2">Pending</option>
              <option value="3">Canceled</option>
            </Form.Select>
            <Button variant="outline-success">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <EditStatus show={modalShow} onHide={() => setModalShow(false)} />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Order's
          </span>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Number</th>
              <th>date</th>
              <th>Customer</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Items</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> #1 </td>
              <td> June 26, 2021 </td>
              <td> Jessica Moore </td>
              <td>
                <Badge bg="success">Paid</Badge>{" "}
              </td>
              <td>
                <Badge bg="success">Shipped</Badge>{" "}
              </td>
              <td>3 Items </td>
              <td>$200.00 </td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-trash"></i>
                  <i
                    className="fa-solid fa-edit"
                    onClick={() => setModalShow(true)}
                  ></i>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </td>
            </tr>

            <tr>
              <td> #2 </td>
              <td> May 15, 2021 </td>
              <td> Ryan Ford </td>
              <td>
                <Badge bg="info">Pending</Badge>{" "}
              </td>
              <td>
                <Badge bg="info">Pending</Badge>{" "}
              </td>
              <td>3 Items </td>
              <td>$200.00 </td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-trash"></i>
                  <i
                    className="fa-solid fa-edit"
                    onClick={() => setModalShow(true)}
                  ></i>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td> #1 </td>
              <td> June 26, 2021 </td>
              <td> Jessica Moore </td>
              <td>
                <Badge bg="success">Paid</Badge>{" "}
              </td>
              <td>
                <Badge bg="success">Shipped</Badge>{" "}
              </td>
              <td>3 Items </td>
              <td>$200.00 </td>
              <td>
                <span className="d-flex gap-2">
                  <i className="fa-solid fa-trash"></i>
                  <i
                    className="fa-solid fa-edit"
                    onClick={() => setModalShow(true)}
                  ></i>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(EAdminOrders);
