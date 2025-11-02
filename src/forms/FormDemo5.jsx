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
        },
        hobbiesValidator:{
            required:{
                value:true,
                message:"hobby is required*"
            },
            validate:(params)=>{
             //   console.log("params.....ho",params)
             return params?.length>1 || "min 2 hobby selection is required*"
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
                <label>HOBBIES</label>
                CRICKET: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="cricket"></input><br></br>
                CHESS: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="chess"></input><br></br>
                DANCE: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="dance"></input><br></br>
                READING: <input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="reading"></input><br></br>
                {errors.hobbies?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
