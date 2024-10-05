import React from 'react';
import ChartComponent from '../components/ChartComponent';

const ProgressCharts = ({ logs }) => {
    return (
        <div className="progress-charts-page">
            <h1>Your Progress Charts</h1>
            <ChartComponent logs={logs} /> {/* Reusing ChartComponent */}
        </div>
    );
};

export default ProgressCharts;
