import React, { useRef } from 'react'
import './style.css'

function Focus() {

    const inputref =useRef("")

    console.log(inputref)

    const handleclick = ()=>{
           inputref.current.focus();
    }


  return (
    <>
    <div className='box1'><br/><br/><br/><br/>
        <h1> Auto-focusing Input Field</h1><br/><br/>
        <input type="text" placeholder='Enter Name' ref={inputref} /><br/><br/><br/>
        <button onClick={handleclick}>Click Here</button>   
    </div>

    
    </>

    
  )
}

export default Focus
