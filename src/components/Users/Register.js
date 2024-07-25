import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the custom CSS

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false); // State to manage success message
    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            // Redirect to login page after 3 seconds
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);

            // Cleanup timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.1.16:3001/api/auth/register', {
                username,
                password,
                name,
                phoneNumber,
                email,
                course
            });

            if (response.status === 201) {
                // Notify user via email
                await axios.post('http://192.168.1.16:3001/api/notifications/email', {
                    toUser: email,
                    toAdmin: 'ravi7@live.in',
                    subject: 'Registration Successful',
                    body: `Hello ${name}, your registration was successful. Welcome to our platform!`
                });

                // Notify admin via email
                await axios.post('http://192.168.1.16:3001/api/notifications/email', {
                    toUser: 'ravi@justconstruct.co', // Admin email
                    toAdmin: 'ravi7@live.in',
                    subject: 'New User Registered',
                    body: `A new user has registered with the following details:
                    \nName: ${name}
                    \nEmail: ${email}
                    \nPhone Number: ${phoneNumber}
                    \nCourse: ${course}`
                });
                
                setSuccess(true);
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Registration failed');
            console.error('Registration failed', error.response?.data?.error || error.message);
        }
    };

    if (success) {
        return (
            <div className="success-container">
                <h2>Registration Successful</h2>
                <p>Thank you for registering! You will receive an email confirmation shortly.</p>
            </div>
        );
    }

    return (
        <div className="register-container">
            <h2 className="register-heading">Student Register</h2>
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="course" className="form-label">Course</label>
                    <input
                        type="text"
                        className="form-control"
                        id="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
