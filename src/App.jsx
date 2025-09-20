import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header" //export const
import Footer from './components/Footer' //export default 
import { Content } from './components/Content'
//import './App.css'

function App() {



  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
