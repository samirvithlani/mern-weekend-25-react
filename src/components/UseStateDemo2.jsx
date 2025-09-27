import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const [loading,setLoading] = useState(true) //bool... //false
    const stopLoader = ()=>{
        setLoading(false) // loading -- false..
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 2</h1>
        {
            loading == true && <h1>Loading...</h1>
        }
        <button onClick={()=>{stopLoader()}}>stop</button>
    </div>
  )
}
