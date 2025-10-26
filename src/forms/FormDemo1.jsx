import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} =useForm()
    const [output, setoutput] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    //regisger is used form regiseter input fileds
    //handle submit is used for handle submit event..

    //USer difine function..
    const submitHandler = (data)=>{
        console.log(data) //{name:""}
        setoutput(data)
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO</h1>
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
                <label>COLOR</label>
                <input type='color' {...register("color")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubbmited == true &&  <div style={{color:output.color}}>
            <h1>OUTPUT</h1>
            <h2>Name = {output.name}</h2>
            <h3>AGe = {output.age}</h3>
        </div>
        }
        
    </div>
  )
}
