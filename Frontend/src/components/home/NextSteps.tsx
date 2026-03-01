// components/NextSteps.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NextSteps: React.FC = () => {
  return (
    <section className="next-steps">
      <div className="container">
        <h2 data-aos="fade-up">Ready to Take the Next Step?</h2>
        <div className="steps-grid">
          <div className="step-card" data-aos="fade-up">
            <div className="step-number">1</div>
            <h3>Explore Options</h3>
            <p>Browse colleges and programs to see what interests you</p><br />
            <Link to="/" className="step-button">Browse Colleges</Link>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="100">
            <div className="step-number">2</div>
            <h3>Get Personalized Advice</h3>
            <p>Answer a few questions to get recommendations</p><br />
            <Link to="/" className="step-button">Start Questionnaire</Link>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="200">
            <div className="step-number">3</div>
            <h3>Talk to an Advisor</h3>
            <p>Schedule a free consultation with our experts</p><br />
            <Link to="/" className="step-button">Book Appointment</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;