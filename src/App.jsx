import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./components/Header"; //export const
import Footer from "./components/Footer"; //export default
import { Content } from "./components/Content";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { Mapdemo5 } from "./components/Mapdemo5";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseSatteDemo3 } from "./components/UseSatteDemo3";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { InputDemo1 } from "./components/InputDemo1";
import { InputDemo2 } from "./components/InputDemo2";
import { InputDemo3 } from "./components/InputDemo3";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./netflix/NetflixHome";
import { NetflixMovies } from "./netflix/NetflixMovies";
import { NetflixShows } from "./netflix/NetflixShows";
import { Navbar } from "./components/Navbar";
import { Error404 } from "./components/Error404";
import { HomeComponent } from "./components/HomeComponent";
import { Watch } from "./netflix/Watch";
import { Users } from "./components/Users";
import { Books } from "./components/Books";
import { TableImpl } from "./components/TableImpl";
import { FormDemo1 } from "./forms/FormDemo1";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { FormDemo4 } from "./forms/FormDemo4";
import { FormDemo5 } from "./forms/FormDemo5";
import { FormDemo6 } from "./forms/FormDemo6";
import { FormDemo7 } from "./forms/FormDemo7";
import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { OmdbApi } from "./api/OmdbApi";
import { MovieDetail } from "./api/MovieDetail";
import { ApiDemo3 } from "./api/ApiDemo3";
import { ApiDemo4 } from "./api/ApiDemo4";
import { UpdateUser } from "./api/UpdateUser";
import { UseEffectDemo1 } from "./components/UseEffectDemo1";
import { Login } from "./components/Login";
import { Slide, ToastContainer } from "react-toastify";
import { ApiDemo5 } from "./api/ApiDemo5";
import { UseRefDemo1 } from "./components/UseRefDemo1";
import { UseRefDemo2 } from "./components/UseRefDemo2";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { FindBomb } from "./components/FindBomb";
//import './App.css'

function App() {
  var title = "React";

  //title = {title}
  //key = {value}
  //key can be any
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Navbar title={title}></Navbar>

      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/tableimpl" element={<TableImpl />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route>
        <Route path="/formdemo6" element={<FormDemo6 />}></Route>
        <Route path="/formdemo7" element={<FormDemo7 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
        <Route path="/apidemo4" element={<ApiDemo4 />}></Route>
        <Route path="/apidemo5" element={<ApiDemo5 />}></Route>
        <Route path="/userefdemo1" element = {<UseRefDemo2/>}></Route>
        <Route path="/usememodemo" element = {<UseMemoDemo/>}></Route>
        <Route path="/updateUser/:id" element={<UpdateUser />}></Route>
        <Route path="/useeffectdemo" element={<UseEffectDemo1 />}></Route>
        <Route path="/searchmovie" element={<OmdbApi />}></Route>
        <Route path="/moviedetail/:id" element={<MovieDetail />}></Route>
        <Route path="/findbomb" element = {<FindBomb/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
