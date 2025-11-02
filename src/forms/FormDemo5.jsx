import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors..",errors)

    const refcodeList = ["abcd","pqr","pvr","java"]

    const submitHandler = (data)=>{
        console.log("data...",data)
    }

    const validationSchema = {
        contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact is not valid."
            }
        },
        inqueryCodeValidator:{
            required:{
                value:true,
                message:"inquery code is required*"
            },
            validate:(params)=>{
                //constion
                console.log("params",params)
                return params=="royal" || "inq code is not valid.."
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            validate:(params)=>{
                
                return refcodeList.includes(params) || "invalid ref code..."
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Contact NO</label>
                <input type='text' {...register("contactno",validationSchema.contactValidator)}></input>
                {errors.contactno?.message}
            </div>
            <div>
                <label>INQERY CODE</label>
                <input type='text' {...register("inqcode",validationSchema.inqueryCodeValidator)}></input>
                {errors.inqcode?.message}
            </div>
            <div>
                <label>Ref code</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
