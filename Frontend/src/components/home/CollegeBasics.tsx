// components/CollegeBasics.tsx
import React from 'react';

const CollegeBasics: React.FC = () => {
  return (
    <section className="college-basics">
      <div className="container">
        <h2 data-aos="fade-up">College Basics Explained</h2>
        <div className="basics-grid">
          <div className="basic-card" data-aos="fade-up">
            <h3>What is a Bachelor's Degree?</h3>
            <p>A 4-year program where you study one main subject (your "major") along with other general courses. This is
              what most students pursue after high school.</p>
          </div>
          <div className="basic-card" data-aos="fade-up" data-aos-delay="100">
            <h3>What are College Credits?</h3>
            <p>Points you earn by completing courses. You need a certain number to graduate. Most courses are worth 3-4
              credits.</p>
          </div>
          <div className="basic-card" data-aos="fade-up" data-aos-delay="200">
            <h3>What is Financial Aid?</h3>
            <p>Money to help pay for college, including scholarships (free money), grants (need-based free money), and
              loans (money you pay back).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeBasics;