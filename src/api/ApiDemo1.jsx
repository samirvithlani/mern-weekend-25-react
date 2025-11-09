import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

    const getUsers = async()=>{

        //URL -->API
        //Promise<AxiosResponse<any>
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("response axios object",res)
        //to access api response u need to call data variable from res
        console.log("api response...",res.data)
        console.log("api response message variable..",res.data.message)
        console.log("api  response data variable",res.data.data)


    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={getUsers}>GET</button>
    </div>
  )
}
