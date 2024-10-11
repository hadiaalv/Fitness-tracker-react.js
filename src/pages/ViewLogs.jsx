import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faSwimmer, faBicycle, faPlusCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Function to get the icon based on workout type
const getIconForWorkoutType = (type) => {
    switch (type) {
        case 'weightlifting':
            return faDumbbell;
        case 'running':
            return faRunning;
        case 'swimming':
            return faSwimmer;
        case 'cycling':
            return faBicycle;
        default:
            return faDumbbell; // Default icon
    }
};

const ViewLogs = ({ logs }) => {
    return (
        <div className="view-logs-page">
            <h1>Your Workout Logs</h1>
            {logs.length === 0 ? (
                <div className="no-logs">
                    <FontAwesomeIcon icon={faExclamationCircle} className="no-logs-icon" />
                    <p>No workout logs to display yet.</p>
                    <Link to="/log-workout" className="add-log-btn">
                        <FontAwesomeIcon icon={faPlusCircle} /> Add Your First Workout
                    </Link>
                </div>
            ) : (
                <ul className="logs-list">
                    {logs.map((log, index) => (
                        <li key={index} className="log-item">
                            <FontAwesomeIcon icon={getIconForWorkoutType(log.type)} className="log-icon" />
                            {log.type} - {log.duration} minutes on {log.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewLogs;
