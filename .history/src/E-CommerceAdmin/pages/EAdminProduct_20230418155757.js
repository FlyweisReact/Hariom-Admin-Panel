import React from 'react'
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


        
        </section>
    </>
  )
}

export default HOC(EAdminProduct)