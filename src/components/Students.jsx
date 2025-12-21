import React, { useState } from 'react'
import { StudentsList } from './StudentsList'
import { StudentContext } from '../context/StudentContext'

export const Students = () => {
    const [studentData, setstudentData] = useState([
        {id:1,name:"raj",age:23,gender:"male"},
        {id:2,name:"neha",age:25,gender:"female"},
        {id:3,name:"seema",age:24,gender:"female"},
        {id:4,name:"parth",age:25,gender:"male"},
    ])
  return (
    <div style={{textAlign:"center"}}>
        <h1>STUDETS</h1>
        <StudentContext.Provider value={{studentData}}>
          <StudentsList></StudentsList>
          
        </StudentContext.Provider>
    </div>
  )
}
