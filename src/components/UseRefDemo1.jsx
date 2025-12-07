import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE REF DEMO</h1>
        <div>
            <label>NAME</label>
            <input ref={inputRef} type='text'></input>
        </div>
    </div>
  )
}
