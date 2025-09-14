import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {

  //javascript
  
  var name = "India"
  var age = 77
  var isSuperPower = true;
  var user ={
    name:"RAM",
    age:23
  }

  return (
    <div>
      <h1>Rule 1: at a time we can return only 1 tag</h1>
      <h1>Rule 2: every tag must have closing tag</h1>
      <h2>Rule / con : whatever has been written inside return() sttament, only will display to browser</h2>
      <h1>HELLO</h1>
      {name}
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h2>super power = {isSuperPower == true ? "Yes" : "No"}</h2>
      <h1>Name = {user.name}</h1>
      <h2>Age = {user.age}</h2>
    </div>
  )
}

export default App
