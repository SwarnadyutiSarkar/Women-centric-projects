// src/components/MenstrualCycleForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MenstrualCycleForm = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/menstrual_cycles', {
            user_id: 1,  // Example user ID
            start_date: startDate,
            end_date: endDate,
            symptoms: symptoms
        })
        .then(response => {
            alert('Menstrual cycle logged successfully');
            setStartDate('');
            setEndDate('');
            setSymptoms('');
        })
        .catch(error => {
            console.error('There was an error logging the cycle!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <div>
                <label>Symptoms:</label>
                <textarea value={symptoms} onChange={(e) => setSymptoms(e.target.value)}></textarea>
            </div>
            <button type="submit">Log Cycle</button>
        </form>
    );
};

export default MenstrualCycleForm;
