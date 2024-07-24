import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirection
import './Header.css'; // Import the CSS file for styling

export default function Header() {
  const navigate = useNavigate();
  
  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg my-4">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">React Application</Link>

        {/* Toggler for mobile view */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Links and search on the right */}
          <div className="d-flex align-items-center ms-auto">
            {/* Links */}
            <ul className="navbar-nav mb-2 mb-lg-0 me-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="/" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">DevOps</a></li>
                  <li><a className="dropdown-item" href="/">Go Lang</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Python</a></li>
                </ul>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              )}
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-link nav-link">Logout</button>
                </li>
              )}
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}
