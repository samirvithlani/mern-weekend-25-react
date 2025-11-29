import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUsers = async()=>{

        //URL -->API
        //Promise<AxiosResponse<any>
        const res = await axios.get("https://node5.onrender.com/user/user") //updated record...
        console.log("response axios object",res)
        //to access api response u need to call data variable from res
        console.log("api response...",res.data)
        console.log("api response message variable..",res.data.message)
        console.log("api  response data variable",res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        //table formate..

    }

    const deleteUser = async(id)=>{
      //id == userId
      //alert(id)
      //delete api call
      //REUEST METGOD DLEETE https://node5.onrender.com/user/user/{userid}
      const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      console.log(res)
      if(res.status==204){
        alert("user deleted successfully!!")
        //get API CALL --> database updated..
        getUsers()
      }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={getUsers}>GET</button>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.map((user)=>{
                return<tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.isActive == true?"true":"false"}</td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}
