import React, { useState } from 'react'

export const UseSatteDemo3 = () => {
    const [user, setuser] = useState({id:1,name:"ram"})
    const changeUser = ()=>{

        // var newUser = {
        //     id:user.id + 100,
        //     name:user.name.toUpperCase()
        // }
        // setuser(newUser)
        // ... spread operator
        setuser({...user,id:user.id+100,name:user.name.toUpperCase()})

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 3</h1>
        {user.id}
        {user.name}

        <button onClick={()=>{changeUser()}}>change</button>
    </div>
  )
}
