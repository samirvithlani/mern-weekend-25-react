import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    var randomNo = Math.floor(Math.random()*1000) 

    const [count, setcount] = useState(0) //number
    const increseCount = ()=>{
        setcount(count+1) // increment / state variable chanegs...
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 3</h1>
        <h1>COunt - {count}</h1>
        <h1>Random No = {randomNo}</h1>
        <button onClick={()=>{increseCount()}}>+</button>
    </div>
  )
}
