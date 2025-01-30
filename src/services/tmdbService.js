import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const tmdbService = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "it-IT",
    },
});

export const getMovieImage = (movie_id) => {
    return tmdbService.get(`/movie/${movie_id}`)
        .then(response =>  response.data)
        .catch((error) => {
            console.error("Errore durante il recupero dell'immagine del film:", error);
        });
}

export default tmdbService;