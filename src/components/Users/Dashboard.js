import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the custom CSS

const Dashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const navigate = useNavigate(); // useNavigate hook from react-router-dom for redirection

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://192.168.1.16:3001/api/student/data', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setStudentData(response.data);
            } catch (error) {
                console.error('Error fetching student data', error);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // redirect to login page after logout
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Student Dashboard</h2>
            {studentData ? (
                <div className="dashboard-info">
                    <p><strong>Username:</strong> {studentData.username}</p>
                    <p><strong>Name:</strong> {studentData.name}</p>
                    <p><strong>Phone Number:</strong> {studentData.phoneNumber}</p>
                    <p><strong>Email:</strong> {studentData.email}</p>
                    <p><strong>Course:</strong> {studentData.course}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleLogout} className="dashboard-logout-button">Logout</button>
        </div>
    );
};

export default Dashboard;
