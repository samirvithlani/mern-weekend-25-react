import React, { useState } from 'react'

export const InputDemo2 = () => {

    const [name, setname] = useState("")
    const [choosedColor, setchoosedColor] = useState("black")
    const [isSubbmited, setisSubbmited] = useState(false)
    //nameHandler

    const submitHandler = ()=>{
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo2</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{setname(event.target.value)}}></input>  
        </div>
        <div>
            <label>CHOOSE COLOR</label>
            <input type='color' onChange={(event)=>{setchoosedColor(event.target.value)}}></input>
            
        </div>

        <div>
            <button onClick={()=>{submitHandler()}}>SUBMIT</button>
        </div>
        {
            isSubbmited &&  <div style={{color:choosedColor}}>
            <h1>OUTPUT</h1>
            <h1>Name : {name}</h1>
        </div>
        }
        
    </div>
  )
}
