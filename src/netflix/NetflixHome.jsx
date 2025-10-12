import React from "react";
import { MyButton } from "../common/MyButton";

export const NetflixHome = () => {

  const netflixhometest = ()=>{
    alert("i am netflix home...")
  }
  return (
    <div style={{ textAlign: "center" }}>
      <MyButton fun={netflixhometest} name="btn1" class = "btn btn-danger"></MyButton>
      <h1>NETFLIX HOME</h1>
    </div>
  );
};
