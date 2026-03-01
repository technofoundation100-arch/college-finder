import React, { useEffect } from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - College Finder';
  }, []);

  return (
    <>
      {/* About Hero */}
      <section className="page-hero about-hero">
        <div className="hero-content " data-aos="fade-up">
          <h1 className='text-4xl font-inter font-semibold text-primary-900 tracking-wide'>About Ourself for your Guideance</h1>
          <p>Your trusted partner in educational excellence since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text" data-aos="fade-right">
              <h2 className='text-center text-4xl my-5'>Our Story</h2>
              <p>Founded in 2010, College Finder has been at the forefront of educational consulting, helping
                students worldwide achieve their academic dreams. What started as a small team of passionate
                educators has grown into a global network of education experts.</p>
              <p>Our mission is to make quality education accessible to students worldwide through personalized
                guidance and support. We believe every student deserves the opportunity to pursue their dreams,
                and we're here to make that journey smoother and more successful.</p>
              <p>Over the years, we've helped over 10,000 students from 35 countries find their perfect educational
                path, with a 98% success rate in university admissions.</p>
            </div>
            <div className="story-image" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2 data-aos="fade-up" className='text-center text-4xl my-5'>Our Core Values</h2>
          <p className="section-description" data-aos="fade-up" data-aos-delay="100">These principles guide everything we do at College Finder</p>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up">
              <i className="fas fa-star"></i>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service, from personalized counseling to post-admission support.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <i className="fas fa-handshake"></i>
              <h3>Integrity</h3>
              <p>Honest and transparent guidance for all students. We never recommend institutions just for commissions.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-users"></i>
              <h3>Community</h3>
              <p>Building strong educational communities worldwide through alumni networks and mentorship programs.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>Embracing new approaches to education through technology and personalized learning pathways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 data-aos="fade-up" className='text-center text-4xl my-5'>Our Leadership Team</h2>
          <p className="section-description" data-aos="fade-up" data-aos-delay="100">Meet the experts guiding your educational journey</p>
          <div className="team-grid">
            <div className="team-member" data-aos="fade-up">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" alt="CEO" />
              <h3>John Anderson</h3>
              <p className="position">CEO & Founder</p>
              <p className="bio">25+ years in educational consulting</p>
              <p className="bio-detail">Former Dean of Admissions at Stanford University with extensive experience in international student recruitment.</p>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Academic Director" />
              <h3>Dr. Sarah Williams</h3>
              <p className="position">Academic Director</p>
              <p className="bio">Former University Dean</p>
              <p className="bio-detail">PhD in Education from Harvard with specializations in curriculum development and international education systems.</p>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600" alt="Operations Head" />
              <h3>Michael Chen</h3>
              <p className="position">Head of Operations</p>
              <p className="bio">Global Education Expert</p>
              <p className="bio-detail">15 years experience managing international student services across three continents.</p>
            </div>
            <div className="team-member" data-aos="fade-up" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600" alt="Counseling Head" />
              <h3>Priya Sharma</h3>
              <p className="position">Head of Counseling</p>
              <p className="bio">Career Guidance Specialist</p>
              <p className="bio-detail">Certified career counselor with expertise in aligning academic paths with future job markets.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;