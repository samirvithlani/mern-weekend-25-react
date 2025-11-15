import React from "react";
//import css
import "../assets/css/loader.css";

export const Loader = () => {
  return (
    <div class="loader-wrapper">
      <div class="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};
