import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
    const {register,handleSubmit,reset}=useForm()
    const [isSubbmited, setisSubbmited] = useState(false)

    const navigate = useNavigate()

    const submitHanlder = async(data)=>{
        setisSubbmited(true)
        try{
            const res = await axios.post("https://node5.onrender.com/user/login",data)
            console.log(res)
            if(res.status==200){
                localStorage.setItem("token",res.data.data)
                //alert("login success")
                toast.success("login sucess")
                //navigate("/url")
                navigate("/")
                //redirect..

            }

        }catch(err){
            alert("login failed..")
            setisSubbmited(false)
            reset()
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>LOAGIN COMPONNET</h1>
        <form onSubmit={handleSubmit(submitHanlder)}>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input type='password' {...register("password")}></input>
                </div>
                <div>
                    <input disabled={isSubbmited} type='submit'></input>
                </div>
        </form>
    </div>
  )
}
