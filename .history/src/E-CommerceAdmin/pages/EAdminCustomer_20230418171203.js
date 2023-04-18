import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const EAdminCustomer = () => {
  return (
    <>
        <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Customers 
          </span>
        </div>

        <div style={{width  : '100%' , overflow : 'auto'}}>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Nick Name</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Email Id</th>
            <th>Birth Country</th>
            <th>Birth City</th>
            <th>Wallet</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adam Tylor</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>India</td>
            <td>Delhi</td>
            <td>$200.00</td>
            <td>
            <i className='fa-solid fa-trash' />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
        </section>
    </>
  )
}

export default HOC(EAdminCustomer)