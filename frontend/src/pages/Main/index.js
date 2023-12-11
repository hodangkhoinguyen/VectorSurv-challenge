import Form from '../../components/Form';
import MovieTable from '../../components/MovieTable';
import './style.css';

import { useEffect, useState } from 'react';
import api from '../../services/api';

function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getMovies()
        .then((result) => {
            setMovies(result);
        })
        .catch(e => console.log(e));
    }, []);

    return (
        <div className='content-container'>
            <Form setMovies={setMovies} />
            <hr className='line'/>
            <MovieTable movies={movies} />
        </div>
    )
}

export default Main;
