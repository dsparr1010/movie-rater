import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function MovieList(props) {

    const print = something => {
        console.log(something)
    }

    const movieClicked = movie => evt => {
        print(movie)
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie)
    }

    return (
        <div>
            <h2>Movie List</h2>
            <div>
                {props.movies && props.movies.map( movie => {
                    return (
                        <div key = {movie.id} className='movie-item'>
                            <h4 onClick = {movieClicked(movie)}>{movie.title}</h4>
                            <FontAwesomeIcon icon={faEdit} onClick={() => editClicked(movie)} />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList;