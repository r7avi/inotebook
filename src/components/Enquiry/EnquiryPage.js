import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnquiryPage.css';

const programmingCourses = [
    'Python', 'Java', 'JavaScript', 'Go Language', 'Linux', 'Machine Learning', 'Django'
];
const advancedCourses = [
    'Cloud Computing', 'DevOps', 'AI and ML', 'Power BI', 'IoT', 'Ethical Hacking'
];

export default function EnquiryPage() {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [subcourses, setSubcourses] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        contact: '',
        city: '',
        address: '',
        course: '',
        subcourse: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true); // State to toggle form visibility
    const navigate = useNavigate(); // Hook for redirection

    const handleCourseChange = (event) => {
        const course = event.target.value;
        setSelectedCourse(course);

        setFormData({
            ...formData,
            course: course,
            subcourse: ''
        });

        if (course === 'programming') {
            setSubcourses(programmingCourses);
        } else if (course === 'advanced') {
            setSubcourses(advancedCourses);
        } else {
            setSubcourses([]);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'contact') {
            if (/^\d*$/.test(value) && value.length <= 10) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://194.195.117.187:3001/api/enquiry/submit-enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();

                    if (response.ok) {
                        setSuccessMessage('Enquiry submitted successfully!');
                        setFormVisible(false); // Hide the form
                    } else {
                        setErrors({ submit: data.message || 'Error submitting enquiry' });
                    }
                } else {
                    const text = await response.text();
                    setErrors({ submit: 'Unexpected response format: ' + text });
                    console.error('Unexpected response format:', text);
                }
            } catch (error) {
                setErrors({ submit: 'Error submitting enquiry: ' + error.message });
                console.error('Enquiry submission error:', error);
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const age = Number(formData.age);
        if (isNaN(age) || age < 15 || age > 60) {
            newErrors.age = 'Age must be between 15 and 60';
        }

        const contactPattern = /^\d{10}$/;
        if (!contactPattern.test(formData.contact)) {
            newErrors.contact = 'Contact number must be exactly 10 digits';
        }

        if (!formData.course) {
            newErrors.course = 'Course is required';
        }

        if (!formData.subcourse) {
            newErrors.subcourse = 'Sub-course is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (!formVisible && successMessage) {
            const timer = setTimeout(() => {
                navigate('/'); // Redirect after 2 seconds
            }, 2000);

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [formVisible, successMessage, navigate]);

    return (
        <div className="container-2">
            {formVisible ? (
                <form className="enquiry-form" onSubmit={handleSubmit}>
                    <h2>Enquiry Form</h2>

                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        min="15" 
                        max="60" 
                        required 
                    />
                    {errors.age && <p className="error">{errors.age}</p>}

                    <label htmlFor="contact">Contact Number:</label>
                    <input 
                        type="text" 
                        id="contact" 
                        name="contact" 
                        value={formData.contact} 
                        onChange={handleChange} 
                        pattern="\d{10}" 
                        placeholder="Enter your 10-digit mobile number" 
                        maxLength="10"
                        required 
                    />
                    {errors.contact && <p className="error">{errors.contact}</p>}

                    <label htmlFor="city">City:</label>
                    <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        required 
                    />

                    <label htmlFor="address">Address:</label>
                    <textarea 
                        id="address" 
                        name="address" 
                        rows="4" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    ></textarea>

                    <label htmlFor="course">Select Course:</label>
                    <select 
                        id="course" 
                        name="course" 
                        value={formData.course} 
                        onChange={handleCourseChange} 
                        required 
                    >
                        <option value="" disabled>Select a course</option>
                        <option value="programming">Programming Languages</option>
                        <option value="advanced">Advanced Computer Courses</option>
                    </select>
                    {errors.course && <p className="error">{errors.course}</p>}

                    {selectedCourse && (
                        <>
                            <label htmlFor="subcourse">Select Sub-Course:</label>
                            <select 
                                id="subcourse" 
                                name="subcourse" 
                                value={formData.subcourse} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="" disabled>Select a sub-course</option>
                                {subcourses.map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                ))}
                            </select>
                            {errors.subcourse && <p className="error">{errors.subcourse}</p>}
                        </>
                    )}

                    <button type="submit">Submit</button>
                    {errors.submit && <p className="error">{errors.submit}</p>}
                </form>
            ) : (
                <div className="success-message">
                    <h2>{successMessage}</h2>
                </div>
            )}
        </div>
    );
}
