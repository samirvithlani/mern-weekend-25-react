import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {
  //:name -->get
  //useParams
  const name = useParams().name //.name :name //.id :id
  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching ....{name}</h1>
    </div>
  )
}
