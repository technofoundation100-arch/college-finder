import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Abroad.css";

const Abroad: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    degree: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Study Abroad Programs | College Finder";

    const initializeSwiper = async () => {
      try {
        const SwiperCore = await import("swiper");
        const SwiperModules = await import("swiper/modules");

        const { Navigation, Pagination, Autoplay } = SwiperModules;
        SwiperCore.default.use([Navigation, Pagination, Autoplay]);

        // Destinations slider
        new SwiperCore.default(".destinations-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });

        // Testimonials slider
        new SwiperCore.default(".testimonials-slider", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 5000,
          },
          on: {
            slideChange: (swiper) => {
              setActiveTestimonial(swiper.realIndex);
            },
          },
        });

        // Scroll animations
        const animateOnScroll = () => {
          const elements = document.querySelectorAll("[data-aos]");
          elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
              element.classList.add("aos-animate");
            }
          });
        };

        window.addEventListener("scroll", animateOnScroll);
        animateOnScroll();

        return () => {
          window.removeEventListener("scroll", animateOnScroll);
        };
      } catch (error) {
        console.error("Failed to initialize Swiper:", error);
      }
    };

    initializeSwiper();
  }, []);

  // Count-up animation
const animateCountUp = () => {
  const counters = document.querySelectorAll<HTMLElement>(".count");
  counters.forEach((counter) => {
    const target = parseInt(counter.dataset.target || "0", 10);
    const duration = 1000; // total duration in ms
    const stepTime = 20;
    let count = 0;
    const increment = target / (duration / stepTime);

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.innerText =
          target >= 1000 ? `${Math.ceil(count / 1000)}K+` : `${Math.ceil(count)}${counter.innerText.replace(/\d+/g, '')}`;
        setTimeout(updateCounter, stepTime);
      } else {
        counter.innerText =
          target >= 1000 ? `${target / 1000}K+` : `${target}${counter.innerText.replace(/\d+/g, '')}`;
      }
    };

    updateCounter();
  });
};

// Trigger count-up when stats are visible
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCountUp();
        obs.disconnect(); // Only trigger once
      }
    });
  },
  { threshold: 0.6 }
);

const statSection = document.querySelector(".stats-grid");
if (statSection) {
  observer.observe(statSection);
}

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    document.body.style.overflow = isFormVisible ? "auto" : "hidden";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      `Thank you for your interest, ${formData.name}! Our team will contact you shortly.`
    );
    setIsFormVisible(false);
    document.body.style.overflow = "auto";
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      degree: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero abroad-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="text-4xl font-inter font-semibold text-primary-900 tracking-wide">Abroad Your Dream</h1>
          <p className="hero-subtitle">
            Discover premier universities worldwide with personalized guidance
            for your international academic journey
          </p>
          <Link to={"/contact"}>
            <button className="btn-register">
              <i className="fas fa-user-graduate"></i> Register for your Higher
              Studies
            </button>
          </Link>
        </div>
      </section>

      {/* Why Study Abroad Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-content">
            <div className="text-content" data-aos="fade-right">
              <h2 className="text-4xl text-blue-900 mb-4">
                Why Go Abroad Studies?
              </h2>
              <p>
                Studying abroad transforms students through exposure to diverse
                cultures, perspectives, and educational systems. This experience
                cultivates adaptability and intercultural competence—essential
                skills in our globalized economy.
              </p>
              <p>
                International degrees enhance career prospects by demonstrating
                independence, problem-solving abilities, and language
                proficiency to potential employers worldwide.
              </p>
              <div className="stats-grid">
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <h3 className="count" data-target="95">
                    0%
                  </h3>
                  <p>Acceptance Rate</p>
                </div>
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h3 className="count" data-target="50">
                    0+
                  </h3>
                  <p>Partner Countries</p>
                </div>
                <div
                  className="stat-item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <h3 className="count" data-target="10000">
                    0K+
                  </h3>
                  <p>Successful Students</p>
                </div>
              </div>
              <Link to={"/contact"}>
                <button className="btn-register" onClick={toggleForm}>
                  <i className="fas fa-arrow-right"></i> Register Now
                </button>
              </Link>
            </div>
            <div className="info-image" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Students studying abroad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <div className="container">
          <h2 data-aos="fade-up" className="text-center text-4xl my-5">
            Top Study Destinations
          </h2>{" "}
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore the most sought-after education hubs for international
            students
          </p>
          <div className="swiper destinations-slider">
            <div className="swiper-wrapper">
              {/* United Kingdom */}
              <div className="swiper-slide">
                <div className="destination-card" data-aos="fade-up">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600"
                      alt="UK education"
                    />
                    <div className="country-flag uk-flag"></div>
                  </div>
                  <div className="destination-content">
                    <h3>United Kingdom</h3>
                    <p>World-class universities with rich academic heritage</p>
                    <ul className="destination-features">
                      <li>
                        <i className="fas fa-university"></i> 150+ Top-ranked
                        institutions
                      </li>
                      <li>
                        <i className="fas fa-graduation-cap"></i> 1-year
                        master's programs
                      </li>
                      <li>
                        <i className="fas fa-globe"></i> Vibrant multicultural
                        cities
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <span className="avg-cost">
                        Average tuition: £15,000/year
                      </span>
                      <a href="#" className="explore-btn">
                        View UK Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Australia */}
              <div className="swiper-slide">
                <div
                  className="destination-card"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600"
                      alt="Australia education"
                    />
                    <div className="country-flag au-flag"></div>
                  </div>
                  <div className="destination-content">
                    <h3>Australia</h3>
                    <p>
                      Innovative research with post-study work opportunities
                    </p>
                    <ul className="destination-features">
                      <li>
                        <i className="fas fa-university"></i> 43 Globally ranked
                        universities
                      </li>
                      <li>
                        <i className="fas fa-briefcase"></i> 2-4 year post-study
                        visas
                      </li>
                      <li>
                        <i className="fas fa-sun"></i> High quality of life
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <span className="avg-cost">
                        Average tuition: AUD$30,000/year
                      </span>
                      <a href="#" className="explore-btn">
                        View Australia Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Canada */}
              <div className="swiper-slide">
                <div
                  className="destination-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600"
                      alt="Canada education"
                    />
                    <div className="country-flag ca-flag"></div>
                  </div>
                  <div className="destination-content">
                    <h3>Canada</h3>
                    <p>Affordable education with immigration pathways</p>
                    <ul className="destination-features">
                      <li>
                        <i className="fas fa-university"></i> 96 Recognized
                        institutions
                      </li>
                      <li>
                        <i className="fas fa-passport"></i> Permanent residency
                        options
                      </li>
                      <li>
                        <i className="fas fa-home"></i> Safe, welcoming
                        communities
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <span className="avg-cost">
                        Average tuition: CAD$25,000/year
                      </span>
                      <a href="#" className="explore-btn">
                        View Canada Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* United States */}
              <div className="swiper-slide">
                <div
                  className="destination-card"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600"
                      alt="USA education"
                    />
                    <div className="country-flag us-flag"></div>
                  </div>
                  <div className="destination-content">
                    <h3>United States</h3>
                    <p>World-leading universities with diverse programs</p>
                    <ul className="destination-features">
                      <li>
                        <i className="fas fa-university"></i> 8 of top 10 global
                        universities
                      </li>
                      <li>
                        <i className="fas fa-flask"></i> Cutting-edge research
                        facilities
                      </li>
                      <li>
                        <i className="fas fa-network-wired"></i> Strong industry
                        connections
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <span className="avg-cost">
                        Average tuition: $35,000/year
                      </span>
                      <a href="#" className="explore-btn">
                        View USA Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Germany */}
              <div className="swiper-slide">
                <div
                  className="destination-card"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                      alt="Germany education"
                    />
                    <div className="country-flag de-flag"></div>
                  </div>
                  <div className="destination-content">
                    <h3>Germany</h3>
                    <p>High-quality education with low or no tuition fees</p>
                    <ul className="destination-features">
                      <li>
                        <i className="fas fa-university"></i> 400+
                        English-taught programs
                      </li>
                      <li>
                        <i className="fas fa-euro-sign"></i> Free tuition at
                        public universities
                      </li>
                      <li>
                        <i className="fas fa-industry"></i> Strong engineering
                        and tech focus
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <span className="avg-cost">
                        Average tuition: €0-€3,000/year
                      </span>
                      <a href="#" className="explore-btn">
                        View Germany Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="abroad-services">
        <div className="container">
          <h2 data-aos="fade-up" className="text-center text-4xl my-5">
            Our Services
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We guide you through every step of your study abroad journey
          </p>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <div className="service-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>University Applications</h3>
              <p>Strategic selection and flawless application preparation</p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check-circle"></i> Profile evaluation
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> SOP/LOR guidance
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Deadline management
                </li>
              </ul>
            </div>
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <i className="fas fa-passport"></i>
              </div>
              <h3>Visa Processing</h3>
              <p>Comprehensive visa documentation and interview preparation</p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check-circle"></i> Financial proof
                  guidance
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Mock visa interviews
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Application tracking
                </li>
              </ul>
            </div>
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Pre-Departure Services</h3>
              <p>Smooth transition to your new academic home</p>
              <ul className="service-features">
                <li>
                  <i className="fas fa-check-circle"></i> Accommodation
                  assistance
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Airport pickup
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Cultural orientation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 data-aos="fade-up" className="text-center text-4xl my-5">
            Success Stories
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hear from students who achieved their global education dreams
          </p>
          <div className="swiper testimonials-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-card" data-aos="fade-up">
                  <div className="testimonial-image">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
                      alt="Emily Chen"
                    />
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      "The personalized university shortlisting saved me months
                      of research. My counselor's expertise helped me secure
                      admission to my dream program at Oxford with a partial
                      scholarship."
                    </p>
                    <div className="student-info">
                      <h4>Emily Chen</h4>
                      <p className="university">
                        MSc Computer Science, University of Oxford
                      </p>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-card" data-aos="fade-up">
                  <div className="testimonial-image">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                      alt="Raj Patel"
                    />
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      "The visa guidance was exceptional—I got my Canadian study
                      permit in just 3 weeks! The team helped me prepare perfect
                      documentation and conducted mock interviews."
                    </p>
                    <div className="student-info">
                      <h4>Raj Patel</h4>
                      <p className="university">MBA, University of Toronto</p>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-indicators">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`indicator ${
                    activeTestimonial === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Begin Your Global Journey?</h2>
          <p>
            Schedule a free consultation with our international education
            experts
          </p>
          <Link to={"/contact"}>
            <button className="btn-register" onClick={toggleForm}>
              <i className="fas fa-calendar-check"></i> Book Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Registration Form */}
      {isFormVisible && (
        <div className="register-form-overlay">
          <form className="registration-form" onSubmit={handleFormSubmit}>
            <h2>Study Abroad Consultation</h2>
            <button
              type="button"
              className="close-form-btn"
              onClick={toggleForm}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <i className="fas fa-user form-icon"></i>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <i className="fas fa-envelope form-icon"></i>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <i className="fas fa-phone form-icon"></i>
            </div>
            <div className="form-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Preferred Study Destination</option>
                <option value="UK">United Kingdom</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Other">Other</option>
              </select>
              <i className="fas fa-globe-americas form-icon"></i>
            </div>
            <div className="form-group">
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                required
              >
                <option value="">Degree Level</option>
                <option value="Bachelor">Bachelor's</option>
                <option value="Master">Master's</option>
                <option value="PhD">PhD/Doctorate</option>
                <option value="Diploma">Diploma/Certificate</option>
              </select>
              <i className="fas fa-graduation-cap form-icon"></i>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your questions or preferred study areas"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Submit Application
            </button>
          </form>
        </div>
      )}

      {/* Floating Contact Button */}
      <div className="floating-contact-btn" onClick={toggleForm}>
        <i className="fas fa-comment-dots"></i>
        <span>Get Help</span>
      </div>
    </>
  );
};

export default Abroad;
