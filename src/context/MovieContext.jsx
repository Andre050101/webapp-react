import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/movies/");
            setMovies(data);
            setLoading(false);
        }
        catch (err) {
            setError("Errore durante il recuper dei film");
            setLoading(false);
        }
    };
    const fetchMovieById = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/movies/${id}`);
            return data;
        } catch (err) {
            setError("Errore durante il recupero del film");
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ movies, loading, error, fetchMovieById }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);