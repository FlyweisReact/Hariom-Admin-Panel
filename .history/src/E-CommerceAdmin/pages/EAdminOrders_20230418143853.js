import React from 'react'
import { Badge, Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const EAdminOrders = () => {

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
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
      


  return (
    <>
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
             <td><Badge bg='success'>Paid</Badge> </td>
             <td><Badge bg='success'>Shipped</Badge> </td>
             <td>3 Items </td>
             <td>$200.00 </td>
             <td>
             <span className='d-flex gap-2'>
             <i className="fa-solid fa-trash"></i>
             <i className="fa-solid fa-edit"></i>
             <i className="fa-solid fa-eye"></i>
             </span>
              </td>
            
            </tr>
          </tbody>
        </Table>

        </section>
    </>
  )
}

export default HOC(EAdminOrders)