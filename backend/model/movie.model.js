import mongoose from 'mongoose';

const Movie = mongoose.model(
    'Movie',
    new mongoose.Schema({
        title: String,
        releaseDate: Date,
        rating: Number,
        genre: String,
        studioEmail: String
    })
);

export default Movie;
