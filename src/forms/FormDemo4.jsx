import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler = (data)=>{
        console.log("data...",data)
    }

    const validationSchema  = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required"
            },
            minLength:{
                value:2,
                message:"min len should be 2"
            },
            maxLength:{
                value:20,
                message:"max len should be 20"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required"
            },
            min:{
                value:1,
                message:"min age should be 1"
            },
            max:{
                value:60,
                message:"max age should be 60"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'{...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
