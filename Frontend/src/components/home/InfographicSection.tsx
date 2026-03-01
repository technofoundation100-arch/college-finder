// components/InfographicSection.tsx
import React from 'react';

const InfographicSection: React.FC = () => {
  const stats = [
    { value: "10Cr+", label: "Scholarships Awarded" },
    { value: "85+", label: "Countries Represented" },
    { value: "100+", label: "Industry Collaborations" },
    { value: "3Cr+", label: "Research Funding" },
    { value: "150+", label: "Campus Recruiters" }
  ];

  return (
    <section className="infographic-section">
      <div className="container">
        <div className="rocket-container">
          <div className="circles">
            {stats.map((stat, index) => (
              <div 
                className="circle" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="circle-number">{stat.value}</span>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographicSection;