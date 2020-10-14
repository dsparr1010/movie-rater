import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Token d26712fb4cb944b475abf030960028e78c27fe14'
      }
    }).then( res => {
      return res.json()
    }).then( res => {
      return setMovies(res)
    }).catch( err => {
      console.log(err)
      throw err;
    })
  }, [])


  const movieClicked = movie => {
    setSelectedMovie(movie)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
        <div className = "layout">
          <MovieList movies = {movies} movieClicked={movieClicked} ></MovieList>
          <MovieDetails movie={selectedMovie}></MovieDetails>
        </div>
    </div>
  );
}

export default App;
