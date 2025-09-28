import React, { useState } from 'react'

export const InputDemo1 = () => {

    //name--variable
    //setName - function
    const[name,setName]=useState("")
    const [age, setage] = useState("")
    const [email, setemail] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)

    const nameHandler = (event)=>{
        //console.log(event)
        console.log(event.target.value)
        setName(event.target.value)
    }

    const ageHandler = (event)=>{
        setage(event.target.value)
    }
    const displayHandler = ()=>{
        //alert(`Name = ${name} \n Age = ${age} \n Email = ${email}`)
        setisSubbmited(true)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            {/* {age} */}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}></input>
            {/* {email} */}
        </div>
        <div>
            <button onClick={()=>{displayHandler()}}>DISPLAY</button>
        </div>

        {
            isSubbmited == true &&  <div>
            <h1>OUTPUT</h1>
            <h2>Name = {name}</h2>
            <h2>Age = {age}</h2>
            <h4>Email = {email}</h4>
        </div>
            
        }
        
    </div>
  )
}
