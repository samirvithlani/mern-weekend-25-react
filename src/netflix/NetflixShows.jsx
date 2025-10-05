import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {

  const shows = [
    {
      id:1001,
      name:"squid Game"
    },
    {
      id:1002,
      name:"Money Heist"
    },
    {
      id:1003,
      name:"Breaking Bad"
    },
    {
      id:1004,
      name:"Stranger Things"
    },
    {
      id:1005,
      name:"mirzapur"
    }
  ]

  return (
    <div style={{textAlign:"center"}}>
      <h1>SHOWS</h1>
      <ul>
        {
          shows.map((show)=>{
            return <li>
              <Link to={`/watch/${show.name}`}>{show.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  )
}
