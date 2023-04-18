/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminDelivery = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Delivery Person{" "}
          </span>
        </div>

            <Table striped bordered hover>
                
            </Table>

      </section>
    </>
  );
};

export default HOC(EAdminDelivery);
