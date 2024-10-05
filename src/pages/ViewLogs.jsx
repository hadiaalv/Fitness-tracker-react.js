import React from 'react';

const ViewLogs = ({ logs }) => {
    return (
        <div className="view-logs-page">
            <h1>Your Workout Logs</h1>
            {logs.length === 0 ? (
                <p>No workout logs to display yet.</p>
            ) : (
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>
                            {log.type} - {log.duration} minutes on {log.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewLogs;
