import React, { useState, useEffect } from 'react';
import {API} from '../api-service';

function MovieForm(props) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    useEffect( () => {
        setTitle(props.movie.title)
        setDescription(props.movie.description)
    }, [props.movie])

    const updateClicked = () => {
        console.log('update here')
        API.updateMovie(props.movie.id, {title, description})
        .then(res => props.updatedMovie(res))
        .catch( err => console.log(err))
    }

    const createClicked = () => {
        console.log('update here')
        API.createMovie({title, description})
        .then(res => props.movieCreated(res))
        .catch( err => console.log(err))
    }

    return(
        <React.Fragment>
            { props.movie ? (
                <div>
                    <label htmlFor='title'>Title</label><br/>
                    <input 
                        id='title' 
                        type='text' 
                        placeholder='title' 
                        value={title}
                        onChange={ evt => setTitle(evt.target.value)}
                        ></input><br/>

                    <label htmlFor='description'>Description</label><br/>
                    <textarea 
                        id='description' 
                        type='text' 
                        placeholder='description'
                        value={description}
                        onChange={ evt => setDescription(evt.target.value) }
                        ></textarea><br/>
                        {   props.movie.id ? (
                            <button onClick={ updateClicked }>Update</button>
                        ) : (
                            <button onClick={ createClicked }>Create</button>
                        )
                        }
                </div>
            ) : null}
        </React.Fragment>
    )
}


export default MovieForm;