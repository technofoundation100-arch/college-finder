// components/FeaturedPrograms.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPrograms: React.FC = () => {
  return (
    <section id="featured" className="featured">
      <div className="container">
        <h2 data-aos="fade-up">Popular Career Paths</h2>
        <p className="section-subtitle" data-aos="fade-up">Explore these common fields of study and what they can offer</p>

        <div className="featured-grid">
          <div className="featured-card" data-aos="fade-up">
            <div className="card-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Computer Science</h3>
            <p>Learn to create software, apps, and work with new technologies</p>
            <div className="program-simple-details">
              <p><strong>What you'll learn:</strong> Programming, problem-solving, technology development</p>
              <p><strong>Career options:</strong> Software developer, data scientist, IT specialist</p>
            </div>
            <Link to="/" className="learn-more">Explore This Path</Link>
          </div>
          <div className="featured-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3>Medical Sciences</h3>
            <p>Study health, medicine, and helping people through healthcare</p>
            <div className="program-simple-details">
              <p><strong>What you'll learn:</strong> Human biology, patient care, medical procedures</p>
              <p><strong>Career options:</strong> Doctor, nurse, medical researcher</p>
            </div>
            <Link to="/" className="learn-more">Explore This Path</Link>
          </div>
          <div className="featured-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Business Administration</h3>
            <p>Learn how organizations work and how to manage businesses</p>
            <div className="program-simple-details">
              <p><strong>What you'll learn:</strong> Management, marketing, finance, entrepreneurship</p>
              <p><strong>Career options:</strong> Business manager, marketing specialist, entrepreneur</p>
            </div>
            <Link to="/" className="learn-more">Explore This Path</Link>
          </div>
        </div>

        <div className="explanation-box" data-aos="fade-up">
          <h3>Not sure what to study?</h3>
          <p>Many students don't know their career path when they start. That's okay! We offer career assessment tests and
            counseling to help you discover fields that match your interests and skills.</p>
          <Link to="/" className="learn-more">Take Our Career Quiz</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;