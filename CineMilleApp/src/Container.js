import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import logo from "./images/logo.png";
import "./Style.css";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=b702c4e1d7bc740837b816f2fd630667";
function Container() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className="page-container">
        <div className="title-cinemille">
          <nav>
            <img className="logo" src={logo} alt="Logo"></img>
            <h1>Movie Schedule</h1>
          </nav>
        </div>
        <div className="movies-container">
          <div className="movies-container2">
            {movies.map((m) => (
              <Link to={`/detail/${m.id}`}>
                <MovieContainer key={m.id} {...m} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Container;
