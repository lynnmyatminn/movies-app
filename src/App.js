import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
// const FEATURED_API = "https://mmmovieapi.herokuapp.com/api/movies/latest";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        // setMovies(data.data);
        console.log(data.results);
        setMovies(data.results);
      });
  }

  const searchHandler = (e) => {
    e.preventDefault();

    if (searchValue) {
      getMovies(SEARCH_API + searchValue);
      setSearchValue("");
    }
  }

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <div className="movie__header">
        <form onSubmit={searchHandler}>
          <input className="search" type="search" placeholder="Search..." value={searchValue} onChange={onChangeHandler} />
        </form>
      </div>
      <div className="movie__container">

        {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        {/* {movies.results.length > 0 &&
<Movie movies={movies.results} />} */}
      </div>
    </>
  )
}

export default App;
