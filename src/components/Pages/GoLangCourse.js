import React from 'react';
import './GoLangCourse.css';

const GoLangCourse = () => {
  return (
    <div className="golang-course-container">
      <div className="container py-5">
        <h1 className="text-center mb-4">Go Language Course</h1>
        
        <section className="mb-5">
          <h2>Why Learn Go Language?</h2>
          <p>Go Language, or Golang, is a statically typed, compiled language designed by Google. It emphasizes simplicity and efficiency with built-in concurrency support. Learning Go can help you build scalable and high-performance systems, and it's known for its fast compilation and easy deployment.</p>
          <div className="text-center">
            <img src="https://via.placeholder.com/600x400" className="img-fluid rounded" alt="Go Language" />
          </div>
        </section>
        
        <section className="mb-5">
          <h2>Key Features of Go Language</h2>
          <ul>
            <li>Concurrency Support: Built-in support for concurrent programming with goroutines and channels.</li>
            <li>Performance: Fast execution and efficient use of memory.</li>
            <li>Simplicity: Clean syntax and straightforward error handling.</li>
            <li>Standard Library: Rich set of libraries for various tasks including HTTP, JSON, and more.</li>
            <li>Strong Typing: Static typing ensures code quality and reduces runtime errors.</li>
          </ul>
        </section>
        
        <section className="mb-5">
          <h2>What to Focus on in Go Language</h2>
          <p>When learning Go, focus on mastering the following areas:</p>
          <ul>
            <li>Go Syntax and Structure</li>
            <li>Concurrency Patterns</li>
            <li>Standard Library Usage</li>
            <li>Error Handling</li>
            <li>Performance Optimization</li>
            <li>Building and Deploying Go Applications</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>Go Language in Practice</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src="https://via.placeholder.com/500x300" className="img-fluid rounded" alt="Go Language Practice 1" />
            </div>
            <div className="col-md-6 mb-4">
              <img src="https://via.placeholder.com/500x300" className="img-fluid rounded" alt="Go Language Practice 2" />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2>Additional Resources</h2>
          <p>Explore these resources to deepen your knowledge of Go Language:</p>
          <ul>
            <li><a href="/" className="text-dark">Go Official Documentation</a></li>
            <li><a href="/" className="text-dark">Effective Go Programming</a></li>
            <li><a href="/" className="text-dark">Go by Example</a></li>
            <li><a href="/" className="text-dark">Go Blog</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GoLangCourse;
