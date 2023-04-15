import React from 'react'
import { Table } from 'react-bootstrap'
import HOC from '../layout/HOC'

const AdminUsers = () => {
  return (
   <>
    <p style={{fontSize : '18px' , }} >All Users</p>

    <div style={{width  : '100%' , overflow : 'auto'}}>
      <Table striped bordered hov
    </div>
   </>
    )
}

export default HOC(AdminUsers)