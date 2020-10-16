import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {API} from '../api-service';
import { useCookies } from 'react-cookie';

function MovieList(props) {

    const [token] = useCookies(['mr-token'])

    const movieClicked = movie => evt => {
        props.movieClicked(movie)
    }

    const editClicked = movie => {
        props.editClicked(movie)
    }

    const removeClicked = movie => {
        API.deleteMovie(movie.id, token['mr-token'])
            .then( () => props.removeClicked(movie))
            .catch( err => console.log(err))
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
                            <FontAwesomeIcon icon={faTrash} onClick={() => removeClicked(movie)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList;