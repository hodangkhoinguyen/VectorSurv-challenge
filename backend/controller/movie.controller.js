import Movie from '../model/movie.model.js';

async function addMovie(req, res) {
    try {
        const title = req.body.title;
        const date = req.body.releaseDate;
        const rating = req.body.rating;
        const genre = req.body.genre;
        const studioEmail = req.body.studioEmail;

        // Verify if the body provides necessary properties
        if (!title || !date || !rating || !genre || !studioEmail) {
            return res.status(400).json({
                message: "The request doesn't provide enough parameters"
            });
        }

        const releaseDate = new Date(date);
        const newMovie = new Movie({
            title,
            releaseDate,
            rating,
            genre,
            studioEmail
        });

        await newMovie.save();
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(500).json({
            error: e.message,
            message: "Cannot add movie"
        });
    }
}

export default {
    addMovie
}
