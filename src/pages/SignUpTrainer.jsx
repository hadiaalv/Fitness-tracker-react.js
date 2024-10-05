// src/pages/SignUpTrainer.jsx
import React from 'react';

const SignUpTrainer = () => {
    return (
        <div className="signup-trainer-page">
            <h1>Trainer Sign Up</h1>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="Enter your username" />

                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />

                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />

                <label>Certification:</label>
                <input type="text" placeholder="Enter your trainer certification details" />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpTrainer;
