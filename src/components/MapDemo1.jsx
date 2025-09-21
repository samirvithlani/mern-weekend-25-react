import React from 'react'

export const MapDemo1 = () => {

    var users = ["ram","shyam","amit","sumit"]

    //forEach:void : console...
    //Map:new array : 
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            users.map((user)=>{
                return <h1>{user}</h1>
            })
        }
    </div>
  )
}
