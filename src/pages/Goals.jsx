import React, { useState } from 'react';

const Goals = () => {
    const [goals, setGoals] = useState([]); // State to store all goals
    const [goal, setGoal] = useState({
        type: '',
        target: '',
        deadline: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setGoal({
            ...goal,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (goal.type && goal.target && goal.deadline) {
            setGoals([...goals, goal]); // Add new goal to the list
            setGoal({ type: '', target: '', deadline: '' }); // Reset the form
        }
    };

    return (
        <div className="goals-page">
            <h1>Set Your Goals</h1>
            <form onSubmit={handleSubmit}>
                <label>Goal Type:</label>
                <input
                    type="text"
                    name="type"
                    value={goal.type}
                    onChange={handleChange}
                    placeholder="e.g. Weight Loss, Muscle Gain"
                    required
                />

                <label>Target:</label>
                <input
                    type="text"
                    name="target"
                    value={goal.target}
                    onChange={handleChange}
                    placeholder="e.g. Lose 10kg, Gain 5kg muscle"
                    required
                />

                <label>Deadline:</label>
                <input
                    type="date"
                    name="deadline"
                    value={goal.deadline}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Set Goal</button>
            </form>

            {/* Display the list of goals */}
            <h2>Your Goals</h2>
            {goals.length > 0 ? (
                <ul>
                    {goals.map((g, index) => (
                        <li key={index}>
                            <strong>{g.type}</strong>: {g.target} by {g.deadline}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No goals set yet.</p>
            )}
        </div>
    );
};

export default Goals;
