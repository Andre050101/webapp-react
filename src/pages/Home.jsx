import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import { useMovieContext } from '../context/MovieContext';
import Card from '../components/Card';

const Home = () => {
    const { movies, loading, error } = useMovieContext();
    if (loading) {
        return <p>Caricamento...</p>;
    };

    if (error) {
        return <p>Errore nel recupero dei film</p>;
    };

    return (
        <>
        <h1 className="text-center mb-4"><strong>FILM</strong></h1>
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-4 mb-4" key={movie.id}>
                   <Card movie={movie} />
                </div>
            ))}
        </div>
        </>
        
    );
};

export default Home;