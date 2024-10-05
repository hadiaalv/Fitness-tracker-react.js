// src/pages/LogWorkout.jsx
import React from 'react';
import LogForm from '../components/LogForm';

const LogWorkout = ({ onAddLog }) => {
    return (
        <div className="log-workout-page">
            <h1>Log Your Workout</h1>
            <LogForm onAddLog={onAddLog} /> {/* Reusing LogForm */}
        </div>
    );
};

export default LogWorkout;
