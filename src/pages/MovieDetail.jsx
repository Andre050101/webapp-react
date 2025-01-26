import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((response) => setMovie(response.data))
            .catch((error) => console.log("Errore nel recupero del film:", error));
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div className="container mt-4">
            <h1 className="text-center">{movie.title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={movie.image} alt={movie.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h3>Abstract</h3>
                    <p>{movie.abstract}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;