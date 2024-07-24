import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the custom CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // Added for error handling
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { username, password });
            if (response.status === 200) {
                // Assuming JWT token is returned
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard');
            } else {
                setError('Login failed. Please try again.'); // Handle non-200 status
            }
        } catch (error) {
            console.error('Login failed', error);
            setError('Login failed. Please check your credentials and try again.'); // Show error to user
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Student Login</h2>
            <form onSubmit={handleSubmit}>
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
                        autoComplete="current-password"
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error */}
                <button type="submit" className="btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
