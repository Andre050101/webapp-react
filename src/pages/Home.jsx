import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

const fetchMovies = async () => {
    const { data } = await axios.get("http://localhost:3000/movies/");
    return data;
};

const Home = () => {
    const {data: movies, isLoading, error}= useQuery('movies', fetchMovies);

    if (isLoading) {
        return <p>Caricamento...</p>;
    };

    if (error) {
        return <p>Errore nel recupero dei film</p>;
    };

    return (
        <>
        <h1 className="text-center mb-4"><strong>Lista dei Film</strong></h1>
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-4 mb-4" key={movie.id}>
                    <div className="card h-100">
                        <img src={movie.image} alt={movie.title} className={styles.movieimg} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <Link to={`/movies/${movie.id}`} className="btn btn-warning">Dettagli</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    );
};

export default Home;