import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../common/MyButton'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>MOVIES</h1>
      <MyButton name="btn 3"></MyButton>
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
