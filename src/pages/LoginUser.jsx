import React, { useState } from 'react';

const LoginUser = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login by checking local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === credentials.username && user.password === credentials.password) {
            onLogin(user); // Notify parent component
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-user-page">
            <h1>User Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                <label>Password:</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginUser;
