import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import styles from './MovieDetail.module.css'

const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((response) => setMovie(response.data))
            .catch((error) => console.log("Errore nel recupero del film:", error));
    }, [id]);

    if(!movie) return <p>Caricamento...</p>

    console.log(movie);
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.abstract}</p>
            <img src={movie.image} alt={movie.title} />
        </div>
    );
};

export default MovieDetail;