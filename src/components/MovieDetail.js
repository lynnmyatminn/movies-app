import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import Movie from "./Movie";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);

  const params = useParams();
  // const SEARCH_API = `https://api.themoviedb.org/3/movie/movieID?api_key=04c35731a5ee918f014970082a0088b1`;
  // "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  //`https://api.themoviedb.org/3/movie/${movieID}?api_key=04c35731a5ee918f014970082a0088b1`

  useEffect(() => {
    getMovieById();
  }, [params.id]);

  const getMovieById = () => {
    console.log(params.id);
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=04c35731a5ee918f014970082a0088b1`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        // setMovies(data.data);
        console.log(data);
        setMovie(data);
      });
  };

  return <>{movie && <Movie key={movie.id} {...movie} />}</>;
};

export default MovieDetail;
