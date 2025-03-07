import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './MovieDetail.module.css'
import { getStarRating } from '../Utilities/operations';
import { useMovieContext } from '../context/MovieContext';

const MovieDetail = () => {
    const { id } = useParams();
    const { fetchMovieById } = useMovieContext();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            const data = await fetchMovieById(id);
            setMovie(data);
        };
        loadMovie();
    }, [id, fetchMovieById]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center"><strong>{movie.title}</strong></h1>
            <div className="row mt-4">
                <div className="col-md-6">
                    <img src={movie.image} alt={movie.title} className={styles.movieimg} />
                </div>
                <div className="col-md-6">
                    <h3><strong>Abstract:</strong></h3>
                    <p>{movie.abstract}</p>
                    <span><strong>Genre: </strong></span>
                    <span>{movie.genre}</span>
                    <br />
                    <span><strong>Released in: </strong></span>
                    <span>{movie.release_year}</span>
                    <br />
                    <span><strong>Director: </strong></span>
                    <span>{movie.director}</span>
                    <br />

                </div>
            </div>
            <div className="mt-5">
                <h2><strong>Recensioni:</strong></h2>
                {movie.reviews && movie.reviews.length > 0 ? (
                    movie.reviews.map((review) => (
                        <div key={review.id} className="card mt-3">
                            <div className="card-body bg-warning">
                                <h5 className="card-title"><strong>Name:</strong> {review.name}</h5>
                                <p className="card-text">{review.text || "Nessuna recensione disponibile."}</p>
                                <span><strong>Vote: </strong>{getStarRating(review.vote)}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Non ci sono recensioni per questo film.</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetail;