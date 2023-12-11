import './style.css';

function Row(movie) {
    // Convert a date string to formal format (e.g. January 1, 2001)
    const parseDate = function (dateInput) {
        const date = new Date(dateInput);
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'            
        ];
        let result = months[date.getMonth()];
        result += ` ${date.getDate()}, ${date.getFullYear()}`;
        return result;
    }

    return (
        <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{parseDate(movie.releaseDate)}</td>
            <td>{movie.rating}</td>
            <td>{movie.genre}</td>
            <td>{movie.studioEmail}</td>
        </tr>
    );
}

function MovieTable(props) {
    const movies = props.movies;

    return (
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Release Date</td>
                    <td>Rating</td>
                    <td>Genre</td>
                    <td>Studio Email</td>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map(
                        (elem) => Row(elem)
                    )
                }
            </tbody>
        </table>
    )
}

export default MovieTable;
