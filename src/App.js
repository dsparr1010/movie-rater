import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState(['Titanic', 'Bowling for Columbine']);

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Token d26712fb4cb944b475abf030960028e78c27fe14'
      }
    }).then( res => {
      res.json()
    }).then( res => {
      setMovies(res)
    }).catch( err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
        <div className = "layout">
          <div>Movie List
            <div>
              {movies.map( movie => {
                return <h4>{movie}</h4>
              })}
            </div>
          </div>
          <div>Movie Detail</div>
        </div>
    </div>
  );
}

export default App;
