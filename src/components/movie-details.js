import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MovieDetails(props) {
    const [ highlighted, setHighlighted ] = useState(-1)

    let mov = props.movie;

    const highlightRate = high => evt => {
        setHighlighted(high)
    }

    const rateClicked = rate => evt => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token d26712fb4cb944b475abf030960028e78c27fe14'
            },
            body: JSON.stringify({stars: rate+1})
        }).then( () => {
            getDetails()
        }).catch( err => {
            console.log(err)
            throw err;
        })
    }

    const getDetails = () => {
        fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token d26712fb4cb944b475abf030960028e78c27fe14'
            }
        }).then( res => {
            return res.json()
        }).then( res => {
            props.updateMovie(res)
        }).catch( err => {
            console.log(err)
            throw err;
        })
    }

    return (
        <React.Fragment>
            { mov ? (
                <div>
                    <h2>{mov.title}</h2>
                    <p>{mov.description}</p>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? "orange" : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 1 ? "orange" : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 2 ? "orange" : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 3 ? "orange" : ''}/>
                    <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 4 ? "orange" : ''}/>
                    ({mov.no_of_ratings})
                    <div className="rate-container">
                        <h2>Rate It</h2>
                        { [...Array(5)].map( (element, index) => {
                            return <FontAwesomeIcon key = {index} icon={faStar} className={highlighted > index-1 ? "purple" : ''}
                                    onMouseEnter={highlightRate(index)}
                                    onMouseLeave={highlightRate(-1)}
                                    onClick={rateClicked(index)}
                            />
                        })
                        }
                    </div>
                </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default MovieDetails;