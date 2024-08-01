import React, { useState } from 'react';
import MovieList from './MovieList';
import UserList from './UserList';
import TicketList from './TicketList';
import './App.css';

function App() {
  const [movies, setMovies] = useState({});
  const [users, setUsers] = useState({});
  const [tickets, setTickets] = useState({});
  const [nextMovieId, setNextMovieId] = useState(1);
  const [nextUserId, setNextUserId] = useState(1);
  const [nextTicketId, setNextTicketId] = useState(1);

  const addMovie = (movieName) => {
    const movieId = nextMovieId;
    setMovies((prevMovies) => ({ ...prevMovies, [movieId]: movieName }));
    setNextMovieId(nextMovieId + 1);
  };

  const addUser = (userName) => {
    const userId = nextUserId;
    setUsers((prevUsers) => ({ ...prevUsers, [userId]: userName }));
    setNextUserId(nextUserId + 1);
  };

  const buyTicket = (userId, movieId) => {
    if (users[userId] && movies[movieId]) {
      const ticketId = nextTicketId;
      setTickets((prevTickets) => ({ ...prevTickets, [ticketId]: { userId, movieId } }));
      setNextTicketId(nextTicketId + 1);
      return ticketId;
    }
    return null;
  };

  const cancelTicket = (ticketId) => {
    if (tickets[ticketId]) {
      setTickets((prevTickets) => {
        const newTickets = { ...prevTickets };
        delete newTickets[ticketId];
        return newTickets;
      });
      return true;
    }
    return false;
  };

  return (
      <div className="container">
        <h1>Cinema Ticket System</h1>
        <div className="section">
          <MovieList addMovie={addMovie} movies={movies} />
        </div>
        <div className="section">
          <UserList addUser={addUser} users={users} />
        </div>
        <div className="section">
          <TicketList
              movies={movies}
              users={users}
              buyTicket={buyTicket}
              cancelTicket={cancelTicket}
              tickets={tickets}
          />
        </div>
      </div>
  );
}

export default App;
