import React, { useState } from 'react'

export const UseStateDemo = () => {

    //var count =0; == 0 intial value
    //[count]--> state variable..
    //setCount --> function --> to apply any changes in state variable..
    //0 --> intial value
    const[count,setCount]=useState(0)

    //state variable

    const increseCount = ()=>{
     //   alert("increse count function called...")
            //count++;
            setCount(count+1)
            console.log("count = ",count)
    }
    const decreseCount = (x)=>{
        alert("decremet ...."+x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>INCRESE</button>

        {/* <button onClick={decreseCount(100)}>decrese</button> */}
        {/* <button onClick={()=>{decreseCount(100)}}>decrese</button> */}
    </div>
  )
}
