import React from 'react'
import { Table } from 'react-bootstrap'
import { toast } from 'react-toastify'
import HOC from '../layout/HOC'

const AdminUsers = () => {
  return (
   <>
    <p style={{fontSize : '18px', textTransform : 'uppercase' , fontWeight : 'bold'}} >All Users</p>

    <div style={{width  : '100%' , overflow : 'auto'}}>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nick Name</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Birth Country</th>
            <th>Birth City</th>
            <th>Wallet</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>
            <i className='fa-solid fa-trash' onClick={() => toast.success('User Deleted Successfully')} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
   </>
    )
}

export default HOC(AdminUsers)