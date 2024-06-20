import React, { useRef } from 'react'

function Hightlight() {

    const highlight  = useRef("")

    const handleclick=()=>{
        highlight.current.select();
    }

  return (
    <div className='box1'>
        <h1>Text Highlighter</h1><br/><br/>
        <input type="text"  placeholder='Enter Text' ref={highlight}  /><br/><br/><br/>
        <button onClick={handleclick}>Click Here</button>
    </div>
  )
}

export default Hightlight
