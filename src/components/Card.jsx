import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ movie }) => {
    return (
        <div className={styles["card-container"]}>
                        <img src={movie.image} alt={movie.title} className={styles["card-image"]} />
                        <div className={styles["card-overlay"]}>
                            <h5 className={styles["card-title"]}>{movie.title}</h5>
                            <p className={styles["card-text"]}>{movie.abstract}</p>
                            <Link to={`/movies/${movie.id}`} className={styles["details-link"]}><span className={styles["btn-text"]}>Dettagli</span></Link>
                        </div>
                    </div>
    );
};

export default Card;