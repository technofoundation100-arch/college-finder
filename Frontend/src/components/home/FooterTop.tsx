// components/FooterTop.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const FooterTop: React.FC = () => {
  return (
    <section className="footer-top">
      <div className="footer-top-content">
        <h3 data-aos="fade-up">Begin Your Educational Journey Today</h3>
        <div className="study-options">
          <div className="study-option domestic-option" data-aos="fade-up">
            <div className="option-icon">
              <i className="fas fa-university"></i>
            </div>
            <h4>Domestic Studies</h4>
            <p>Discover the best colleges and universities in India with our comprehensive guidance and support
              throughout your admission process.</p>
            <Link to="/college" className="option-button">
              Explore Indian Colleges
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="study-option abroad-option" data-aos="fade-up" data-aos-delay="100">
            <div className="option-icon">
              <i className="fas fa-globe-americas"></i>
            </div>
            <h4>Abroad Studies</h4>
            <p>Pursue your dreams at top international universities with our expert counseling and application
              assistance. support
              throughout your admission process.</p>
            <Link to="/abroad" className="option-button">
              Explore International Options
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;