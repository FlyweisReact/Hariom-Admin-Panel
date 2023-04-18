import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const EAdminOrders = () => {
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
              <th>Profile Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Commission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>User Name</td>
              <td>User@gmail.com</td>
              <td>7854965412</td>
              <td>$100</td>
            
            </tr>
          </tbody>
        </Table>

        </section>
    </>
  )
}

export default HOC(EAdminOrders)