import React from 'react'
import { UseGlobalContext } from './Context'


const Search = () => {

  const {query,searchPost} = UseGlobalContext();
  return (
    <>
   <h1>Technical News on the Go</h1>
   <form onSubmit={(e)=> e.preventDefault()}>
      <div>
        <input 
         type='text'
         placeholder='Search Query'
         value={query}
         onChange={(e)=>searchPost(e.target.value)}
        >

        </input>
      </div>
   </form>
   </>
  )
}

export default Search