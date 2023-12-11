import './style.css';
import api from '../../services/api';
import { useRef } from 'react';

function verifyForm(movie) {
    const parameter = [ "title", "releaseDate", "rating", "genre", "studioEmail" ];

    for (let i = 0; i < parameter.length; i++) {
        if (!movie[parameter[i]] || movie[parameter[i]] === "") {
            alert(`You are missing ${parameter[i]}`);
            return false;
        }
    }

    // Verify rating
    if (isNaN(movie.rating) || !(Number(movie.rating) <= 10 && Number(movie.rating) >= 0)) {
        alert("Please enter rating as a number in range 0-10");
        return false;
    }

    // Verify genre
    const genres = [ "Action", "Animation", "Comedy", "Drama",
                    "Historical", "Horror", "Sci Fi" ];
    for (let i = 0; i < genres.length; i++) {
        if (movie.genre === genres[i]) return true;
    }

    alert("Please enter genre as one of the options: " + genres.join(", "));
    return false;
}

async function updateMovie(props, movie) {
    await api.addMovie(movie);
    const movieList = await api.getMovies();
    props.setMovies(movieList);
}

function Form(props) {
    const title = useRef("");
    const date = useRef("");
    const rating = useRef("");
    const genre = useRef("");
    const email = useRef("");

    const handleSubmit = () => {        
        const data = {
            title: title.current,
            releaseDate: date.current,
            rating: rating.current,
            genre: genre.current,
            studioEmail: email.current
        };

        if (verifyForm(data)) {
            updateMovie(props, data)
            .then(() => {
                // Reset the form
                title.current = "";
                date.current = "";
                rating.current = "";
                genre.current = "";
                email.current = "";
                const inputs = document.getElementsByTagName('input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = "";
                }
            })
            .catch(err => console.log(err));
        };
    };

    return (
        <div className="new-movie-form">
            <div className='parameter-container'>
                <label className='form-label' htmlFor="movie-title">Movie Title</label>
                <input className='form-input' type="text" name="movie-title" id="movie-title"
                onChange={e => title.current = e.target.value } />
            </div>
            <div className='parameter-container'>
                <label className='form-label' htmlFor="release-date">Release Date</label>
                <input className='form-input' type="date" name="release-date" id="release-date"
                onChange={ e => date.current = e.target.value } />
            </div>
            <div className='parameter-container'>
                <label className='form-label' htmlFor="movie-rating">Movie Rating</label>
                <input className='form-input' type="text" name="movie-rating" id="movie-rating"
                onChange={ e => rating.current = e.target.value } />
            </div>
            <div className='parameter-container'>
                <label className='form-label' htmlFor="genre">Genre</label>
                <input className='form-input' type="text" name="genre" id="genre"
                onChange={ e => genre.current = e.target.value } />
            </div>
            <div className='parameter-container'>
                <label className='form-label' htmlFor="studio-email">Studio Email</label>
                <input className='form-input' type="text" name="studio-email" id="studio-email"
                onChange={ e => email.current = e.target.value } />
            </div>
            <div className='parameter-container'>
                <label className='form-label'></label>
                <button className='form-input' onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default Form;
