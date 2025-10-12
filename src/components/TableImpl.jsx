import React from 'react'
import { MyTable } from '../common/MyTable'

export const TableImpl = () => {
  const books =[
    { id: 101, name: "java", price: 200, ratings: 7.9,publishYear:2004 },
    { id: 102, name: "python", price: 250, ratings: 8.9 },
    { id: 103, name: "js", price: 200, ratings: 9.0 },
   ]
   const user = {
    id:1,name:"ab",age:23,status:1
   }
   //console.log(Object.keys(user))
   //console.log(Object.keys(books[0]))
  return (
    <div style={{textAlign:"center"}}>
        <h1>TABLE IMPLEMENTATION</h1>
        <MyTable header = {Object.keys(books[0])}></MyTable>
    </div>
  )
}
