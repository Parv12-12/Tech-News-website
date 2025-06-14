import React from 'react'
import { UseGlobalContext } from './Context'

const Paginations = () => {

  const {page,nbPages,getNextPage,getPrevPage} = UseGlobalContext()
  return (
    <>
      <div className='pagination-btn'>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>{page+1} of {nbPages}</p>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </>
  )
}

export default Paginations