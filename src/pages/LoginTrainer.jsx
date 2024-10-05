// src/pages/LoginTrainer.jsx
import React from 'react';

const LoginTrainer = () => {
    return (
        <div className="login-trainer-page">
            <h1>Trainer Log In</h1>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="Enter your username" />

                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginTrainer;
