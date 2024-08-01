import React, { useState } from 'react';
import './UserList.css';

function UserList({ addUser, users }) {
    const [userName, setUserName] = useState('');

    const handleAddUser = () => {
        if (userName) {
            addUser(userName);
            setUserName('');
        }
    };

    return (
        <div className="user-list">
            <h2>Users</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Add user"
            />
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {Object.entries(users).map(([id, name]) => (
                    <li key={id}>{id}. {name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
