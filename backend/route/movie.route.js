import movieCtrl from '../controller/movie.controller.js';
import express from 'express';

const router = express.Router();

router.route('/').post(movieCtrl.addMovie);

export default router;
