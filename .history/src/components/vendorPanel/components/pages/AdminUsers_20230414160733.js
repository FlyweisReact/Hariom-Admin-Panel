import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const AdminUsers = () => {
  return (
   <>
    <p style={{fontSize : '18px' , }} >All Users</p>

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
            <th>Email</th>
          </tr>
        </thead>
      </Table>
    </div>
   </>
    )
}

export default HOC(AdminUsers)