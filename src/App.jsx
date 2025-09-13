import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogWorkout from './pages/LogWorkout';
import ViewLogs from './pages/ViewLogs';
import ProgressCharts from './pages/ProgressCharts';
import Goals from './pages/Goals';
import SignUpUser from './pages/SignUpUser';
import LoginUser from './pages/LoginUser';
import SignUpTrainer from './pages/SignUpTrainer';
import LoginTrainer from './pages/LoginTrainer';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [logs, setLogs] = useState([]);

    const handleSignUp = (userData) => {
        setUser(userData);
        
    };

    const handleLogin = (userData) => {
        setUser(userData);
        // Redirect or update the UI after login
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Clear user from local storage
    };

    return (
        <Router>
            <div className="app">
                <Navbar user={user} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/log-workout" element={<LogWorkout onAddLog={(log) => setLogs([...logs, log])} />} />
                    <Route path="/view-logs" element={<ViewLogs logs={logs} />} />
                    <Route path="/progress-charts" element={<ProgressCharts logs={logs} />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/signup-user" element={<SignUpUser onSignUp={handleSignUp} />} />
                    <Route path="/login-user" element={<LoginUser onLogin={handleLogin} />} />
                    <Route path="/signup-trainer" element={<SignUpTrainer />} />
                    <Route path="/login-trainer" element={<LoginTrainer />} /> {/* Add this for trainer login */}

                </Routes>
                {user && <h2>Welcome, {user.username}!</h2>} {/* Display welcome message */}
            </div>
        </Router>
    );
};

export default App;
