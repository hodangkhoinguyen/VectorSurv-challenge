import axios from 'axios';

const BACKEND_URL = "http://localhost:5000/api/v1";

const service = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

async function addMovie(movie) {
    await service.post('/movie', movie);
}

async function getMovies() {
    const result = await service.get('/movie');
    return result.data;
}

const api = {
    addMovie,
    getMovies
};

export default api;
