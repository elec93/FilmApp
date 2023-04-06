import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieContainer from "./MovieContainer";
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
       <h1>CineMille</h1>
        </nav> 
        </div>
        <div className="movies-container">
          {movies.map((m) => (
            <Link to={`/detail/${m.id}`}>
            <MovieContainer key={m.id} {...m} />
          </Link>
          ))}
          
        </div>
      </div>
    </>
  );
}
export default Container


