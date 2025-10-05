import React from 'react'
import { UserList } from './UserList'

export const Users = () => {
  var data = "USER DATA"
  var user = {
    id:101,
    name:"ram",
    age:23

  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USER COMPONNET</h1>
        <UserList data = {data} user = {user}></UserList>
    </div>
  )
}
