import React, { useEffect, useState } from "react";
import "../styles/Contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  district: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
  phone: boolean;
  district: boolean;
  subject: boolean;
  message: boolean;
}

interface FormFeedback {
  show: boolean;
  success: boolean;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    district: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    email: false,
    phone: false,
    district: false,
    subject: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formFeedback, setFormFeedback] = useState<FormFeedback>({
    show: false,
    success: false,
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // TN Districts
  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
    "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
    "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam",
    "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram",
    "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur",
    "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
    "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar",
  ];

  const faqs: FAQItem[] = [
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a consultation by filling out our contact form or calling our office directly at +91 63805 39537. Our counselors are available Monday to Sunday from 9AM to 6PM."
    },
    {
      question: "What documents do I need for admission guidance?",
      answer: "For our initial consultation, you don't need any documents. However, when we proceed with college applications, you'll typically need your 10th and 12th mark sheets, transfer certificate, community certificate (if applicable), and passport-size photographs."
    },
    {
      question: "Do you offer scholarship guidance?",
      answer: "Yes, we provide comprehensive scholarship guidance including government scholarships (like National Scholarship Portal), private scholarships, and college-specific financial aid programs. We'll help you identify all opportunities you qualify for."
    },
    {
      question: "Is there any fee for your services?",
      answer: "Initial consultation is completely free. For detailed admission guidance and application support, we offer affordable packages tailored to your needs. We believe in transparent pricing with no hidden costs."
    },
    {
      question: "How long does the admission process take?",
      answer: "The admission process timeline varies by college and program. Typically, it takes 2-6 weeks from application to final admission. We'll guide you through each step and keep you informed throughout the process."
    },
    {
      question: "Can you help with out-of-state admissions?",
      answer: "Absolutely! While we specialize in Tamil Nadu colleges, we also have partnerships with institutions across India. We can guide you through the admission requirements for other states as well."
    }
  ];

  useEffect(() => {
    document.title = "Contact Us - College Finder";
    // Simulate loading (e.g., for API calls)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !emailRegex.test(formData.email),
      phone: !formData.phone.trim() || !phoneRegex.test(formData.phone),
      district: !formData.district.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim() || formData.message.trim().length < 20,
    };

    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    console.log("Form data:", formData); // Debug form data

    if (!validateForm()) {
      setFormFeedback({
        show: true,
        success: false,
        message: "Please fill out all required fields correctly. Address should be at least 20 characters.",
      });
      scrollToForm();
      return;
    }

    setIsSubmitting(true);

    try {
    const apiUrl = 'http://localhost:3001/api/contact';
    console.log("Attempting to call:", apiUrl); // Debug API URL
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Response status:", response.status); // Debug response status
    
      const data = await response.json();
      console.log("Response data:", data); // Debug response data

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setFormFeedback({
        show: true,
        success: true,
        message: data.message || "Thank you for your registration! Our counselor will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        district: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Detailed error:", error);
      let message = "An error occurred. Please try again later.";
      if (error instanceof Error) {
        message = error.message;
      }
      setFormFeedback({
        show: true,
        success: false,
        message: message,
      });
    } finally {
      setIsSubmitting(false);
      scrollToForm();
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="page-hero contact-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-playfair text-center text-primary-900 mb-6">Contact Us For Your Career Guidance</h1>
          <p>Our expert counselors are ready to help you find the perfect college</p>
          <div className="cta-buttons">
  <a href="tel:+916380539537" className="btn btn-custom">
    <i className="fas fa-phone"></i> Call Now
  </a>
  <a href="#contact-form" className="btn btn-custom">
    <i className="fas fa-envelope"></i> Send Message
  </a>
</div>

        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card" data-aos="fade-up">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </div>
              <h3>Visit Our Office</h3>
              <p>123 Education Street</p>
              <p>Dharmapuri, Tamil Nadu - 636705</p>
              <a 
                href="https://maps.google.com/?q=123+Education+Street+Dharmapuri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Get Directions
              </a>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="100">
              <div className="info-icon">
                <i className="fas fa-phone-alt" aria-hidden="true"></i>
              </div>
              <h3>Call Us Directly</h3>
              <p>
                <a href="tel:+916380539537" className="contact-link">
                  +91 63805 39537
                </a>
              </p>
              <p>Monday to Sunday: 9AM - 6PM</p>
              <a href="tel:+916380539537" className="btn btn-outline">
                <i className="fas fa-phone"></i> Call Now
              </a>
            </div>
            <div className="info-card" data-aos="fade-up" data-aos-delay="200">
              <div className="info-icon">
                <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
              </div>
              <h3>Email Support</h3>
              <p>
                <a href="mailto:technofoundation100@gmail.com" className="contact-link">
                  technofoundation100@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:support@collegefinder.com" className="contact-link">
                  support@collegefinder.com
                </a>
              </p>
              <a href="#contact-form" className="btn btn-outline">
                <i className="fas fa-envelope"></i> Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="form-container" data-aos="fade-up">
            <h2 className="form-title">Register For College Admission Guidance</h2>
            <p className="form-subtitle">
              Fill out this form and our counselor will contact you shortly
            </p>

            {formFeedback.show && (
              <div className={`form-feedback ${formFeedback.success ? "form-success" : "form-error"}`}>
                <i className={`fas ${formFeedback.success ? "fa-check-circle" : "fa-exclamation-circle"}`}></i>
                <span>{formFeedback.message}</span>
                <button 
                  onClick={() => setFormFeedback({...formFeedback, show: false})}
                  className="close-feedback"
                  aria-label="Close feedback"
                >
                  &times;
                </button>
              </div>
            )}

            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${formErrors.name ? "error" : ""}`}>
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className={formData.name ? "has-value" : ""}
                />
                {formErrors.name && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i> Please enter your full name
                  </div>
                )}
              </div>

              <div className="form-row">
                <div className={`form-group ${formErrors.email ? "error" : ""}`}>
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    required
                    className={formData.email ? "has-value" : ""}
                  />
                  {formErrors.email && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i> Please enter a valid email
                    </div>
                  )}
                </div>

                <div className={`form-group ${formErrors.phone ? "error" : ""}`}>
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    pattern="[0-9]{10}"
                    required
                    className={formData.phone ? "has-value" : ""}
                  />
                  {formErrors.phone && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i> 10-digit number required
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${formErrors.district ? "error" : ""}`}>
                  <label htmlFor="district">
                    Your District <span className="required">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    className={formData.district ? "has-value" : ""}
                  >
                    <option value="">-- Select Your District --</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  {formErrors.district && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i> Please select your district
                    </div>
                  )}
                </div>

                <div className={`form-group ${formErrors.subject ? "error" : ""}`}>
                  <label htmlFor="subject">
                    Preferred College Type <span className="required">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={formData.subject ? "has-value" : ""}
                  >
                    <option value="">-- Select College Type --</option>
                    <option value="engineering">Engineering</option>
                    <option value="arts_science">Arts & Science</option>
                    <option value="polytechnic">Polytechnic</option>
                    <option value="medical">Medical</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="law">Law</option>
                    <option value="architecture">Architecture</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.subject && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i> Please select a college type
                    </div>
                  )}
                </div>
              </div>

              <div className={`form-group ${formErrors.message ? "error" : ""}`}>
                <label htmlFor="message">
                  Your Complete Address <span className="required">*</span>
                  <span className="char-count">{formData.message.length}/1000</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your full address with pincode"
                  required
                  maxLength={1000}
                  className={formData.message ? "has-value" : ""}
                ></textarea>
                {formErrors.message && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i> Please enter your complete address (minimum 20 characters)
                  </div>
                )}
              </div>

              <div className="form-footer">
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
                <p className="form-note">
                  By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a> and consent to being contacted by our counselors.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Find answers to common questions about our services
          </p>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${activeFaq === index ? "active" : ""}`} 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3>{faq.question}</h3>
                  <i className={`fas fa-chevron-${activeFaq === index ? "up" : "down"}`}></i>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Our Location
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Visit our office for personalized guidance
          </p>

          <div className="map-container" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.24595826748!2d78.14562936977538!3d12.127999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac0a12a5170857%3A0x662c1d5890a2f9e7!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="College Finder Location Map"
              aria-label="Our office location on Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" data-aos="fade-up">
          <h2>Ready to Start Your College Journey?</h2>
          <p>Contact us today for personalized guidance and support</p>
          <div className="cta-buttons">
            <a href="tel:+916380539537" className="btn btn-primary btn-custom">
              <i className="fas fa-phone"></i> Call Now
            </a>
            <a href="#contact-form" className="btn btn-secondary btn-custom">
              <i className="fas fa-envelope"></i> Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;