import React from 'react'
import HOC from '../layout/HOC'

const AdminUsers = () => {
  return (
   <>
    <p style={{fontSize : '18px' , }} >All Users</p>

    <div style={{width  : '100%' , overflow : 'auto'}}></div>
   </>
    )
}

export default HOC(AdminUsers)