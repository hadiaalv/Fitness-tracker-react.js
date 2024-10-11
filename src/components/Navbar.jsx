// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isWorkoutDropdownOpen, setIsWorkoutDropdownOpen] = useState(false);
    const [isProgressDropdownOpen, setIsProgressDropdownOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isLogInOpen, setIsLogInOpen] = useState(false);

    const handleMouseEnterWorkout = () => setIsWorkoutDropdownOpen(true);
    const handleMouseLeaveWorkout = () => setIsWorkoutDropdownOpen(false);
    const handleMouseEnterProgress = () => setIsProgressDropdownOpen(true);
    const handleMouseLeaveProgress = () => setIsProgressDropdownOpen(false);
    const handleMouseEnterSignUp = () => setIsSignUpOpen(true);
    const handleMouseLeaveSignUp = () => setIsSignUpOpen(false);
    const handleMouseEnterLogIn = () => setIsLogInOpen(true);
    const handleMouseLeaveLogIn = () => setIsLogInOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Wrap the title in a Link to redirect to the homepage */}
                <Link to="/" className="navbar-title-link">
                    <h1 className="navbar-title">Fitness Tracker</h1>
                </Link>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>

                    {/* Dropdown for Workouts */}
                    <li 
                        className="navbar-dropdown" 
                        onMouseEnter={handleMouseEnterWorkout} 
                        onMouseLeave={handleMouseLeaveWorkout}
                    >
                        <span className="navbar-link">Workouts</span>
                        {isWorkoutDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/log-workout" className="dropdown-link">Log Workout</Link></li>
                                <li><Link to="/view-logs" className="dropdown-link">View Logs</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown for Progress */}
                    <li 
                        className="navbar-dropdown" 
                        onMouseEnter={handleMouseEnterProgress} 
                        onMouseLeave={handleMouseLeaveProgress}
                    >
                        <span className="navbar-link">Progress</span>
                        {isProgressDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/progress-charts" className="dropdown-link">Progress Charts</Link></li>
                                <li><Link to="/goals" className="dropdown-link">Goals</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown for Sign Up */}
                    <li 
                        className="navbar-dropdown" 
                        onMouseEnter={handleMouseEnterSignUp} 
                        onMouseLeave={handleMouseLeaveSignUp}
                    >
                        <span className="navbar-link">Sign Up</span>
                        {isSignUpOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/signup-user" className="dropdown-link">User Sign Up</Link></li>
                                <li><Link to="/signup-trainer" className="dropdown-link">Trainer Sign Up</Link></li>
                            </ul>
                        )}
                    </li>

                    {/* Dropdown for Log In */}
                    <li 
                        className="navbar-dropdown" 
                        onMouseEnter={handleMouseEnterLogIn} 
                        onMouseLeave={handleMouseLeaveLogIn}
                    >
                        <span className="navbar-link">Log In</span>
                        {isLogInOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/login-user" className="dropdown-link">User Log In</Link></li>
                                <li><Link to="/login-trainer" className="dropdown-link">Trainer Log In</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
