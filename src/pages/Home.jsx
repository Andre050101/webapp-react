import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies/")
            .then((response) => setMovies(response.data))
            .catch((error) => console.log("Errore nel recupero del film:", error));
    }, []);

    return (
        <div>
        <h1>Lista dei Film</h1>
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    </div>
    );
};

export default Home;