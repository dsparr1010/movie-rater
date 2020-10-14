import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { faCheckSquare, faStar } from '@fortawesome/free-solid-svg-icons'


function MovieDetails(props) {

    const print = something => {
        console.log(something)
    }

    const mov = props.movie;

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
                            return <FontAwesomeIcon icon={faStar} className={mov.avg_rating > 0 ? "purple" : ''}/>
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