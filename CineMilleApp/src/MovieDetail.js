import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "./images/logo.png";
import "./Style.css";

function MovieDetail() {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b702c4e1d7bc740837b816f2fd630667`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [id]);

  return (
    <div className="page-container">
      {movie && (
        <div className="movies-container">
          <div className="detail-container">
            <div className="detail-box">
              <h3 className="film-title" >{movie.title}</h3>
              <img className="img-detail" src={API_IMG + movie.poster_path} />
              <p>{movie.release_date}</p>
              <p>{movie.status}</p>
              <p>{movie.overview}</p>
              <Link to={"/"}>
                <button className="button-detail">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
