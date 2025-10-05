import React from "react";
import { Link } from "react-router-dom";

//props -->property -->it can be any
export const Navbar = (props) => {
  console.log("navbar props",props)
  return (
    <div>
      {props.title}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NETFLIX Home 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                NETFLIX SHOWS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                NETFLIX MOVIES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/users">
                USERS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
