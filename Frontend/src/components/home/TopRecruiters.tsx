import React from 'react';
import { Link } from 'react-router-dom';
import './TopRecruiters.css';

const TopRecruiters: React.FC = () => {
  const recruiters = [
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Palo Alto", logo: "https://logo.clearbit.com/paloaltonetworks.com" },
    { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com" },
    { name: "Autodesk", logo: "https://logo.clearbit.com/autodesk.com" },
    { name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
    { name: "BP", logo: "https://logo.clearbit.com/bp.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "JPMorgan", logo: "https://logo.clearbit.com/jpmorganchase.com" },
    { name: "Aditya Birla", logo: "https://logo.clearbit.com/adityabirla.com" }
  ];

  return (
    <section className="top-recruiters">
      <div className="container">
        <h2 data-aos="fade-up">TOP RECRUITERS</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
          Leading Companies Hiring Our Graduates Across Diverse Industries
        </p>

        <div className="recruiters-grid">
          {recruiters.map((recruiter, index) => (
            <div 
              className="recruiter-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 50} 
              key={index}
            >
              <img 
                src={recruiter.logo} 
                alt={recruiter.name} 
                className="recruiter-logo"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150x50?text=" + recruiter.name;
                }}
              />
              <span className="recruiter-name">{recruiter.name}</span>
            </div>
          ))}
        </div>

        <Link to="#application" className="apply-now-btn" data-aos="fade-up">Apply Now</Link>
      </div>
    </section>
  );
};

export default TopRecruiters;