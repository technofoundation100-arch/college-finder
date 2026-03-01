import React from 'react';
import { Link } from 'react-router-dom';
import './EducationLevels.css';

const EducationLevels: React.FC = () => {
  return (
    <section className="education-levels">
      <div className="container">
        <h2 data-aos="fade-up">Find Help Based on Your Education Level</h2>
        <div className="levels-grid">
          <div className="level-card" data-aos="fade-up">
            <div className="level-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3>High School Students</h3>
            <p>Planning for college? We'll help you:</p>
            <ul>
              <li>Choose the right subjects</li>
              <li>Prepare for entrance exams</li>
              <li>Understand application timelines</li>
            </ul>
            <Link to="/" className="learn-more">Get Prepared</Link>
          </div>
          <div className="level-card" data-aos="fade-up" data-aos-delay="100">
            <div className="level-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Recent Graduates</h3>
            <p>Ready to apply? We'll assist with:</p>
            <ul>
              <li>College selection</li>
              <li>Application process</li>
              <li>Scholarship opportunities</li>
            </ul>
            <Link to="/" className="learn-more">Start Applying</Link>
          </div>
          <div className="level-card" data-aos="fade-up" data-aos-delay="200">
            <div className="level-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Career Changers</h3>
            <p>Looking for a new path? We can help:</p>
            <ul>
              <li>Identify new career options</li>
              <li>Find adult education programs</li>
              <li>Navigate financial aid</li>
            </ul>
            <Link to="/" className="learn-more">Explore Options</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLevels;