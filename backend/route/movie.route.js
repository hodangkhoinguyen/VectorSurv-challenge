import movieCtrl from '../controller/movie.controller.js';
import express from 'express';

const router = express.Router();

router.route('/')
    .post(movieCtrl.addMovie)
    .get(movieCtrl.getAllMovies);

export default router;
