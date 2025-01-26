import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies/")
            .then((response) => setMovies(response.data))
            .catch((error) => console.log("Errore nel recupero del film:", error));
    }, []);

    return (
        <div className="container mt-4">
        <h1 className="text-center mb-4">Lista dei Film</h1>
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-4 mb-4" key={movie.id}>
                    <div className="card">
                        <img src={movie.image} alt={movie.title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.abstract}</p>
                            <Link to={`/movies/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Home;