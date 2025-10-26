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
import { UseStateDemo } from './components/UseStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseSatteDemo3 } from './components/UseSatteDemo3'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { InputDemo1 } from './components/InputDemo1'
import { InputDemo2 } from './components/InputDemo2'
import { InputDemo3 } from './components/InputDemo3'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './netflix/NetflixHome'
import { NetflixMovies } from './netflix/NetflixMovies'
import { NetflixShows } from './netflix/NetflixShows'
import { Navbar } from './components/Navbar'
import { Error404 } from './components/Error404'
import { HomeComponent } from './components/HomeComponent'
import { Watch } from './netflix/Watch'
import { Users } from './components/Users'
import { Books } from './components/Books'
import { TableImpl } from './components/TableImpl'
import { FormDemo1 } from './forms/FormDemo1'
//import './App.css'

function App() {

  var title = "React"

  //title = {title}
  //key = {value}
  //key can be any
  return (
    <div>
      <Navbar title = {title}></Navbar>

      <Routes>
        <Route path='/' element = {<HomeComponent/>}></Route>
        <Route path='/netflixhome' element = {<NetflixHome/>}></Route>
        <Route path='/netflixmovies' element ={<NetflixMovies/>}></Route>
        <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
        <Route path='/watch/:name' element = {<Watch/>}></Route>
        <Route path='/users' element = {<Users/>}></Route>
        <Route path='/*' element = {<Error404/>}></Route>
        <Route path='/books' element = {<Books/>}></Route>
        <Route path='/tableimpl' element = {<TableImpl/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
      </Routes>
    </div>
  )
}

export default App
