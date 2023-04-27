/** @format */

import React from "react";
import HOC from "../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Banners = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button    style={{ backgroundColor: "#2b7a8e", borderRadius: "0" , border : '1px solid #2b7a8e' }} type="submit">
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

      <p className="headP">Dashboard / Banners</p>

      <section>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Banner ( Total : 3)
          </span>
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#2b7a8e] text-white tracking-wider uppercase"
          >
            Add Banner
          </button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/images6/Dark-Anime-Wallpapers-Desktop.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
              <div style={{ fontSize: "1.6rem", textAlign: "center" }}>
                <p> Banner </p>
              </div>
              <div>
                <Button variant="outline-danger" style={{ width: "100%" }}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <img
                src="https://w0.peakpx.com/wallpaper/781/986/HD-wallpaper-luffy-smile.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
              <div style={{ fontSize: "1.6rem", textAlign: "center" }}>
                <p> Banner </p>
              </div>
              <div>
                <Button variant="outline-danger" style={{ width: "100%" }}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79iHRHdnRAjAsz_g82qipibYDqh69mOFXSQ&usqp=CAU"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
              <div style={{ fontSize: "1.6rem", textAlign: "center" }}>
                <p> Banner </p>
              </div>
              <div>
                <Button variant="outline-danger" style={{ width: "100%" }}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HOC(Banners);