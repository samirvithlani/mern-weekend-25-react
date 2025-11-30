import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateUser = () => {

  //fetch id from url
  const id = useParams().id

  const navigate = useNavigate()


  //old data user id -->database ->sepcific id -->data get
  //const {register,handleSubmit}=useForm({defaultValues:{name:"test",age:0,email1:"test"}})
  const {register,handleSubmit}=useForm({defaultValues:async()=>{
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`) //id-->{}
    return res.data.data //{full object return..}
  }})
  const submitHandler = async(data)=>{

    console.log(data) //{}
    //updated data -->put api -->to update
    //https://node5.onrender.com/user/user/692afbba35be41bb12babf5b,data

    //remove _id field from data because api denied to accept id
    delete data._id
    console.log("after deleted _id",data) //{}
    const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
    console.log(res.data) //api response..
    console.log(res.status) //if sucess api is returing 200 status
    if(res.status==200){
      alert("user update sucessfully !!")
      navigate("/apidemo1")
    }
    
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UPDATE USER</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME</label>
            <input type='text' {...register("name")}></input>
          </div>
          <div>
            <label>AGE</label>
            <input type='text' {...register("age")}></input>
          </div>
          <div>
            <label>email</label>
            <input type='text' {...register("email")}></input>
          </div>
          <div>
            <input type='submit'></input>
          </div>
        </form>
    </div>
  )
}
