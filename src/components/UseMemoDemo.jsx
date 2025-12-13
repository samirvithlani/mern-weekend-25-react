import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {
    const [data, setdata] = useState([1,2,3,4,5,6,7,8,9,10]) //array
    const [data2, setdata2] = useState([100,200,300,400,500])
    const addPerson = ()=>{
        //spread operator
        setdata([...data,11])
    }
    const addPerson2 = ()=>{
        //spread operator
        setdata2([...data2,111])
    }
    //memorized...
    //const randomNo   = Math.floor(Math.random()*1000)
    //useMemo(()=>{},[])
    //{}==>callback function
    //[] -->depdancy array
    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[data2])
    //if any changes happend useMemo will rerender...
  return (
    <div style={{textAlign:"center"}}>
        <h2>{randomNo}</h2>
        <h1>USE MEMO DEMO</h1>
        {
            data.map((d)=>{
                return <li>{d}</li>
            })
        }
        {
            data2.map((d)=>{
                return <li>{d}</li>
            })
        }
        <button onClick={addPerson}>add</button>
        <button onClick={addPerson2}>add2</button>
    </div>
  )
}
