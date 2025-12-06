import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {

    const addUser = async()=>{

        //post(url,{req.body})
        const userObj = {
            name:"raj",
            age:23,
            email:"raj1@gmail.com",
            password:"raj123",
            isActive:true
        }

        //{name: 'ajay', email: 'ajay@gmail.com', password: 'ajay123', age: '23', isActive: 'true'}
        try{
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res.data) // api response..
        alert("user addedd successfully !!")
        }
        catch(err){
            alert("error while adding user..")
        }


    }
  return (
    <div style={{textAlign:"center"}}>
            <h1>ADD USER</h1>
            <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}
