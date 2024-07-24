import React from 'react';
import './DevOpsCourse.css';

const DevOpsCourse = () => {
  return (
    <div className="devops-course-container">
      <div className="container py-5">
        <h1 className="text-center mb-4">DevOps Course</h1>
        
        <section className="mb-5">
          <h2>Why Learn DevOps?</h2>
          <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. Learning DevOps can lead to faster development cycles, reduced deployment failures, and improved collaboration between teams.</p>
        </section>
        
        <section className="mb-5">
          <h2>Important Tips and Tricks</h2>
          <ul>
            <li>Automate Everything: Automation is at the heart of DevOps. Automate repetitive tasks to reduce errors and increase efficiency.</li>
            <li>Embrace Continuous Integration/Continuous Deployment (CI/CD): Implementing CI/CD pipelines ensures that your code is always in a deployable state.</li>
            <li>Monitor and Analyze: Use monitoring tools to keep track of your system’s health and performance. Analyzing these metrics helps in making informed decisions.</li>
            <li>Foster Collaboration: Encourage open communication and collaboration between development and operations teams.</li>
            <li>Focus on Security: Incorporate security practices early in the development cycle (DevSecOps) to build secure applications.</li>
          </ul>
        </section>
        
        <section className="mb-5">
          <h2>What to Focus on in DevOps</h2>
          <p>When learning DevOps, focus on mastering the following areas:</p>
          <ul>
            <li>Version Control Systems (e.g., Git)</li>
            <li>Continuous Integration/Continuous Deployment (CI/CD) tools (e.g., Jenkins, GitLab CI)</li>
            <li>Infrastructure as Code (IaC) tools (e.g., Terraform, Ansible)</li>
            <li>Containerization and Orchestration (e.g., Docker, Kubernetes)</li>
            <li>Monitoring and Logging (e.g., Prometheus, ELK Stack)</li>
            <li>Cloud Platforms (e.g., AWS, Azure, Google Cloud)</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2>DevOps in Practice</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <img src="https://via.placeholder.com/500x300" className="img-fluid rounded" alt="DevOps Practice 1" />
            </div>
            <div className="col-md-6 mb-4">
              <img src="https://via.placeholder.com/500x300" className="img-fluid rounded" alt="DevOps Practice 2" />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2>Additional Resources</h2>
          <p>Here are some additional resources to help you get started with DevOps:</p>
          <ul>
            <li><a href="/" className="text-dark">Official DevOps Handbook</a></li>
            <li><a href="/" className="text-dark">Kubernetes Documentation</a></li>
            <li><a href="/" className="text-dark">AWS DevOps Resources</a></li>
            <li><a href="/" className="text-dark">Azure DevOps Documentation</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DevOpsCourse;
