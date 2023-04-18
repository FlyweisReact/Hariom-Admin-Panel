import React from 'react'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import HOC from '../layout/HOC'

const EAdminProduct = () => {

    const { id } = useParams()

  return (
    <>
        <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
             {id} Products
          </span>
        </div>

        <Table striped bordered hover>
        <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Reviews</th>
              <th>Discount</th>
              <th>Price</th>
              <th>Discounted Price</th>
              <th>Size</th>
              <th>Color</th>
              <th>Stock</th>
              <th>Highlights</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
        </Table>

        </section>
    </>
  )
}

export default HOC(EAdminProduct)