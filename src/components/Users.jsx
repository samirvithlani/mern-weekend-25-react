import React from 'react'
import { UserList } from './UserList'

export const Users = () => {
  var data = "USER DATA"
  var user = {
    id:101,
    name:"ram",
    age:23
  }
  const test =()=>{
    alert("test function called....")
  }

  const test1=(x)=>{
    alert("test1 called "+x)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USER COMPONNET</h1>
        
        <UserList data = {data} user = {user} test ={test} test1={test1}></UserList>
    </div>
  )
}
