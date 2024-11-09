'use client';
import { useState } from 'react';

export default function Home() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    FatherName: '',
    Address: '', // Added Address field here to avoid errors
    Cell: '',
    email: '',
    Education: '',
    Experience: '',
    skills: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="resume-container">
      <center><p>Interactive Resume Builder</p></center>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label><br />
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Cell Number:</label><br />
          <input
            type="text"
            name="Cell"
            value={formData.Cell}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Education:</label><br />
          <input
            type="text"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%', height: '200px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Experience:</label><br />
          <input
            type="text"
            name="Experience"
            value={formData.Experience}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%', height: '200px' }}
          />
        </div>
        
        <div>
          <label>Skills:</label><br />
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            style={{ padding: '5px', width: '100%' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <section className="headpic">
            <h1 style={{ fontSize: 'larger', fontFamily: "'Courier New', Courier, monospace", fontWeight: 900 }}>
              {submittedData.name}
            </h1>
            <h1 style={{ fontFamily: "'Lucida Sans'", fontWeight: 300 }}>Software Engineer</h1>
            {submittedData.Address}<br /> Cell: {submittedData.Cell}, Email: {submittedData.email}
          </section>

          <hr className="custom-hr" id="section-divider" />

          <p>Education:</p><h1>{submittedData.Education}</h1>
          <p>Experience:</p><h1>{submittedData.Experience}</h1>
          <p>Skills:</p><h1>{submittedData.skills}</h1>
        </div>
      )}
    </div>
  );
}
