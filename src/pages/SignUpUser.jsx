import React, { useState } from 'react';

const SignUpUser = ({ onSignUp }) => {
    const [user, setUser] = useState({ username: '', password: '', email: '' });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate user sign-up
        localStorage.setItem('user', JSON.stringify(user)); // Save user to local storage
        onSignUp(user); // Notify parent component
    };

    return (
        <div className="signup-user-page">
            <h1>User Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} required />
                <label>Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} required />
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpUser;
