import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    //onBlue -- foucs change
    //onChange
    //all
    //onSubmit --> default
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"onBlur"})

    const submitHandler = (data)=>{
        console.log("...data",data)
    }

    const validationSchema = {
        nameValdidator:{
            required:{
                value:true,
                message:"name is required *"
            },
            minLength:{
                value:3,
                message:"min len is 3"
            },
            maxLength:{
                value:10,
                message:"max len is 10"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValdidator)}></input>
                {
                    errors.name?.message
                }
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
