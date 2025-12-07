import React, { useEffect, useRef } from 'react'

export const UseRefDemo2 = () => {
    const divref = useRef(null)
    useEffect(()=>{
        divref.current.scrollIntoView({'behavior':"smooth"})
    })
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseRefDemo2</h1>
        <div style={{backgroundColor:"red",height:"400px",width:"100%"}}></div>
        <div style={{backgroundColor:"blue",height:"400px",width:"100%"}}></div>
        <div style={{backgroundColor:"green",height:"400px",width:"100%"}}></div>
        <div style={{backgroundColor:"red",height:"400px",width:"100%"}}></div>
        <div ref = {divref} style={{backgroundColor:"yellow",height:"400px",width:"100%"}}></div>
    </div>
  )
}
