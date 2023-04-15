/** @format */

import React, { useCallback, useState } from "react";
import HOC from "../layout/HOC";
import axios from "axios";
import { useEffect } from "react";
import { Container, Table} from "react-bootstrap";

const AdminReview = () => {
  return (
    <>
   

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Testimonials
          </span>
        </div>

        <Container
          className="wcomp overflow-x-auto"
          style={{ marginTop: "2%" }}
        >
          <Table style={{ color: "black" }} striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Review</th>
                <th>Create At</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
         
            </tbody>
          </Table>
        </Container>
      </section>
    </>
  );
};

export default HOC(AdminReview);
