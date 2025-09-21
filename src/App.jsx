import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header" //export const
import Footer from './components/Footer' //export default 
import { Content } from './components/Content'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Mapdemo5 } from './components/Mapdemo5'
//import './App.css'

function App() {



  return (
    <div>
      <Header></Header>
      <Mapdemo5></Mapdemo5>
      <Footer></Footer>
    </div>
  )
}

export default App
