# Movie List
A simple program to keep track of a list of movies with title, release date, rating, genre, and studio email

## How to run
Add a `.env` file under [backend](./backend) folder.
```
PORT=5000
MOVIE_DB_URI=...
```
Then run the command below for backend. It will be run on port `5000`
```
cd backend
npm install // To install required dependencies
nodemon index.js
```

For frontend, it will run on port `3000`
```
cd frontend
npm install // To install required dependencies
npm run start
```
