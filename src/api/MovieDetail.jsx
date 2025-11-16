import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const id = useParams().id
    const getMovieDetail = async()=>{

        const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`)
        console.log(res.data)
    }
  return (
    <div>
        <h1>MOVIE DETAIL CALLED...</h1>
        <button onClick={()=>{getMovieDetail()}}>DETAIL</button>
    </div>
  )
}
