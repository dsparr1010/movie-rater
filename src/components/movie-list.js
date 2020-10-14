import React, { useState, useEffect } from 'react';

function MovieList(props) {

    const print = something => {
        console.log(something)
    }

    const movieClicked = movie => evt => {
        print(movie)
        props.movieClicked(movie)
    }

    return (
        <div>
            <h2>Movie List</h2>
            <div>
                {props.movies && props.movies.map( movie => {
                    return (
                        <div key = {movie.id}>
                            <h4 onClick = {movieClicked(movie)}>{movie.title}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList;