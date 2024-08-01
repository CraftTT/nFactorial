import React, { useState } from 'react';
import './TicketList.css';

function TicketList({ movies, users, buyTicket, cancelTicket, tickets }) {
    const [userId, setUserId] = useState('');
    const [movieId, setMovieId] = useState('');
    const [ticketId, setTicketId] = useState('');

    const handleBuyTicket = () => {
        if (userId && movieId) {
            const newTicketId = buyTicket(Number(userId), Number(movieId));
            if (newTicketId !== null) {
                alert(`Ticket bought with ID: ${newTicketId}`);
                setUserId('');
                setMovieId('');
            } else {
                alert('Fail');
            }
        }
    };

    const handleCancelTicket = () => {
        if (ticketId) {
            const result = cancelTicket(Number(ticketId));
            alert(result ? 'Отмена покупки' : 'Ошибка');
            setTicketId('');
        }
    };

    return (
        <div className="ticket-list">
            <h2>Tickets</h2>
            <h3>Buy Ticket</h3>
            <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
            />
            <input
                type="number"
                value={movieId}
                onChange={(e) => setMovieId(e.target.value)}
                placeholder="Movie ID"
            />
            <button onClick={handleBuyTicket}>Buy Ticket</button>

            <h3>Cancel Ticket</h3>
            <input
                type="number"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                placeholder="Ticket ID"
            />
            <button onClick={handleCancelTicket}>Cancel Ticket</button>

            <h3>Current Tickets</h3>
            <ul>
                {Object.entries(tickets).map(([id, { userId, movieId }]) => (
                    <li key={id}>Ticket ID: {id}, User ID: {userId}, Movie ID: {movieId}</li>
                ))}
            </ul>
        </div>
    );
}

export default TicketList;
