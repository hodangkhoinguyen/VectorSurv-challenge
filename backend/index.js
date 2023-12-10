import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './server.js';

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MOVIE_DB_URI || '';

mongoose.set('strictQuery', true);
mongoose
    .connect(URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(`cannot connected, error happened: ${err}`);
    });
