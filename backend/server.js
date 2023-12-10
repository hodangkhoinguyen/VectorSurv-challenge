import express from 'express';
import cors from 'cors';
import movieRoute from './route/movie.route.js';

const app = express();

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Logging the request method and URL
app.use('*', async (req, res, next) => {
    console.log(req.method, req.originalUrl)
    next();
});

app.use('/api/v1/movie', movieRoute);

// Handle not found APIs
app.use('*', async (req, res) => res.status(404).json({ err: 'URL not found' }));

export default app;
