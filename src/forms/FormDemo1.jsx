import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit} =useForm()
    //regisger is used form regiseter input fileds
    //handle submit is used for handle submit event..

    //USer difine function..
    const submitHandler = (data)=>{
        console.log(data)
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
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
