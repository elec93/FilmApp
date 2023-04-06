import React from "react";
import "./Style.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieContainer({ title, poster_path, release_date }) {
  return (
    <div className="movie-box">
      <img className="poster" src={API_IMG + poster_path} />
      <div className="text-container">
       <h3>{title}</h3>
        <p>Release date: {release_date}</p>
        <p>
          Room number:{" "}
          <b style={{ color: "maroon" }}>
            {Math.floor(Math.random() * 12) + 1}
          </b>
        </p>
      </div>
    </div>
  );
}

export default MovieContainer;
