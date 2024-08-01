import React, { useState } from 'react';
import './MovieList.css';

function MovieList({ addMovie, movies }) {
    const [movieName, setMovieName] = useState('');

    const handleAddMovie = () => {
        if (movieName) {
            addMovie(movieName);
            setMovieName('');
        }
    };

    return (
        <div className="movie-list">
            <h2>Movies</h2>
            <input
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Add movie"
            />
            <button onClick={handleAddMovie}>Add Movie</button>
            <ul>
                {Object.entries(movies).map(([id, name]) => (
                    <li key={id}>{id}. {name}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
