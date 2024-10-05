import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ChartComponent = ({ logs }) => {
    if (logs.length === 0) {
        return <p>No logs to display for charts.</p>;
    }

    // Prepare data for the Bar chart (e.g., workout duration over time)
    const workoutTypes = logs.map(log => log.type);
    const workoutDurations = logs.map(log => log.duration);
    const workoutDates = logs.map(log => log.date);

    const barData = {
        labels: workoutDates,
        datasets: [
            {
                label: 'Workout Duration (minutes)',
                data: workoutDurations,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: [...new Set(workoutTypes)], // Unique workout types
        datasets: [
            {
                label: 'Workout Distribution',
                data: workoutTypes.reduce((acc, type) => {
                    const count = logs.filter(log => log.type === type).length;
                    return [...acc, count];
                }, []),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverOffset: 4,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Workout Duration Over Time',
            },
        },
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Workout Distribution by Type',
            },
        },
    };

    return (
        <div>
            <h2>Your Workout Progress</h2>

            {/* Bar Chart for workout duration over time */}
            <div style={{ width: '80%', margin: '0 auto' }}>
                <Bar data={barData} options={barOptions} />
            </div>

            {/* Pie Chart for workout distribution */}
            <div style={{ width: '60%', margin: '0 auto', marginTop: '50px' }}>
                <Pie data={pieData} options={pieOptions} />
            </div>
        </div>
    );
};

export default ChartComponent;
