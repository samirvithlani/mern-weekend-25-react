import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={()=>{props.fun()}} className={props.class||"btn btn-primary"}>{props.name || "test"}</button>
  )
}
