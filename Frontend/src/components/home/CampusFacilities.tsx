// components/CampusFacilities.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CampusFacilities: React.FC = () => {
  const facilities = [
    {
      title: "IMAC LAB",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "State-of-the-art computing lab with iMac workstations for design and development"
    },
    {
      title: "SPACE LAB",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Advanced research facility for aerospace engineering and astronomy studies"
    },
    {
      title: "CENTRAL INSTRUMENTATION FACILITY",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Cutting-edge equipment for scientific research across disciplines"
    },
    {
      title: "UNI MALL",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Campus shopping center with everything students need in one convenient location"
    }
  ];

  return (
    <section className="campus-facilities">
      <div className="container">
        <h2 data-aos="fade-up">WHERE POSSIBILITIES ARE INFINITE</h2>
        <p className="subtitle" data-aos="fade-up" data-aos-delay="100">From tech labs to wellness centers, we have it all</p>

        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div 
              className="facility-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              key={index}
            >
              <div 
                className="facility-image"
                style={{ backgroundImage: `url(${facility.image})` }}
              ></div>
              <div className="facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="#contact" className="cta-button" data-aos="fade-up">Apply Now</Link>
      </div>
    </section>
  );
};

export default CampusFacilities;