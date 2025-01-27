import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/movies/")
            .then((response) => setMovies(response.data))
            .catch((error) => console.log("Errore nel recupero del film:", error));
    }, []);

    return (
        <>
        <h1 className="text-center mb-4"><strong>Lista dei Film</strong></h1>
        <div className="row">
            {movies.map((movie) => (
                <div className="col-md-4 mb-4" key={movie.id}>
                    <div className="card">
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