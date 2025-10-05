import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>MOVIES</h1>
      <ul>
        <li>
          <Link to="/watch/raid">Raid</Link>
        </li>
        <li>
          <Link to="/watch/animal">Animal</Link>
        </li>
        <li>
          <Link to="/watch/kantra">Kantra</Link>
        </li>
      </ul>
    </div>
  )
}
