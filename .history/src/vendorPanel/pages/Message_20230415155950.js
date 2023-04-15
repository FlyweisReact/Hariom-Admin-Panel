/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {  Table, Modal, Form, Button } from "react-bootstrap";
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
          <Modal.Title id="contained-modal-title-vcenter"> Add Horoscope</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Professional</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Emotions</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Health</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Finance</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Love</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Family</Form.Label>
            <Form.Control type='text' />
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
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
       Push Notification
          </span>

        </div>
  
      </section>
    </>
  );
};

export default HOC(Message);