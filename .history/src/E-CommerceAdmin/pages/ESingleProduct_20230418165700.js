import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../layout/HOC'

const ESingleProduct = () => {
    const { id } =useParams()
  return (
   <>
        {id}
   </>
  )
}

export default HOC(ESingleProduct)