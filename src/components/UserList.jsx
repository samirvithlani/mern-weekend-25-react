import React from 'react'

export const UserList = (props) => {
    //{data:""}
    //{data:"",user:{}}
    //{data:"",user:{},test:f}
    console.log("userlist prop",props)
  return (
    <div style={{color:"blue"}}>
      
        <h1>USER LIST</h1>
        <h5>{props.data}</h5>
        <h6>{props.user.name}</h6>
        <h6>{props.user.id}</h6>
        <h6>{props.user.age}</h6>
        <button onClick={()=>{props.test()}}>TEST</button>
        <button onClick={()=>{props.test1(100)}}>TEST 1</button>
    </div>
  )
}

