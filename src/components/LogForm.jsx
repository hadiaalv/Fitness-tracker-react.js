// src/components/LogForm.jsx
import React, { useState } from 'react';

const LogForm = ({ onAddLog }) => {
    const [workout, setWorkout] = useState({
        type: '',
        duration: '',
        date: ''
    });

    const handleChange = (e) => {
        setWorkout({ ...workout, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddLog(workout);
        setWorkout({ type: '', duration: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Workout Type:</label>
            <input
                type="text"
                name="type"
                value={workout.type}
                onChange={handleChange}
                placeholder="e.g. Running, Weightlifting"
                required
            />

            <label>Duration (minutes):</label>
            <input
                type="number"
                name="duration"
                value={workout.duration}
                onChange={handleChange}
                placeholder="e.g. 30"
                required
            />

            <label>Date:</label>
            <input
                type="date"
                name="date"
                value={workout.date}
                onChange={handleChange}
                required
            />

            <button type="submit">Log Workout</button>
        </form>
    );
};

export default LogForm;
