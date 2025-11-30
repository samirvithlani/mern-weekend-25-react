import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect called...")
    },[count])
    //[count] ->it means whenever any changes happend to count useEffect will call again...
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE EFFECT DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        {count}
    </div>
  )
}
