import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    // Statistics counter animation
    const animateValue = (id: string, start: number, end: number, duration: number, suffix: string = '+') => {
      const obj = document.getElementById(id);
      if (!obj) return;
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (obj) {
          obj.innerHTML = value + suffix;
          
          // Add pulse animation class
          if (progress < 1) {
            obj.classList.add('counting-animation');
          } else {
            setTimeout(() => {
              obj.classList.remove('counting-animation');
            }, 500);
          }
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    };

    // Start animations when component mounts
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counting animations
          animateValue('collegeCount', 0, 1000, 2000);
          animateValue('partnerCount', 0, 70, 1500, 'k+');
          animateValue('successRate', 0, 98, 2500, '%');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      observer.observe(heroStats);
    }

    return () => {
      if (heroStats) {
        observer.unobserve(heroStats);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Find Your Perfect College</h1>
        <h2>Guidelines Provided by College Finder</h2>
        <p>Whether you're in high school, just graduated, or considering a career change, we'll help you find the right path</p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number" id="collegeCount">0+</span>
            <span className="stat-label">Partner Universities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" id="partnerCount">0k+</span>
            <span className="stat-label">Students Placed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" id="successRate">0%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
        <Link to="/college" className="cta-button">College Finder</Link>
      </div>
    </section>
  );
};

export default Hero;