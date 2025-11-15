import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../components/Loader'

export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const getProducts = async()=>{

        setisLoading(true)
        //alert("callled..")
        const res = await axios.get("https://node5.onrender.com/product/getall")
        console.log(res.data)//api response..
        setproducts(res.data.data)
        setisLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading == true && <Loader/>
        }
        <h1>API DMEO 2</h1>
        <button onClick={()=>{getProducts()}}>GET</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>UNIT</th>
                    <th>Desc</th>
                    <th>colors</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((pr)=>{
                        return<tr>
                            <td>{pr._id}</td>
                            <td>{pr.name || "N/A"}</td>
                            <td>{pr.price || "N/A"}</td>
                            <td>{pr.unit || "N/A"}</td>
                            <td>{pr.description || "N/A"}</td>
                            <td>{pr.colors && pr.colors.length>0 || "N/A"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
