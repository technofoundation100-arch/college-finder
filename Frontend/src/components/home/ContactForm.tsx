// components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    districts: '',
    subject: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setResponseMessage('Registration successful!');
      setIsVisible(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        districts: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className={`contact-form ${isVisible ? 'show' : ''}`} id="contact-form">
      <div className="container">
        <div className="form-container">
          <button id="closeFormBtn" onClick={() => setIsVisible(false)}>&times;</button>
          <h2>Register For College Studies</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="tamilnadu-districts">Select a District:</label>
              <select 
                id="tamilnadu-districts" 
                name="districts" 
                value={formData.districts}
                onChange={handleChange}
                required
              >
                <option value="">-- Select District --</option>
                <option value="Ariyalur">Ariyalur (அரியலூர்)</option>
                <option value="Chengalpattu">Chengalpattu (செங்கல்பட்டு)</option>
                <option value="Chennai">Chennai (சென்னை)</option>
                <option value="Coimbatore">Coimbatore (கோயம்புத்தூர்)</option>
                <option value="Cuddalore">Cuddalore (கடலூர்)</option>
                <option value="Dharmapuri">Dharmapuri (தர்மபுரி)</option>
                <option value="Dindigul">Dindigul (திண்டுக்கல்)</option>
                <option value="Erode">Erode (ஈரோடு)</option>
                <option value="Kallakurichi">Kallakurichi (கள்ளக்குறிச்சி)</option>
                <option value="Kancheepuram">Kancheepuram (காஞ்சிபுரம்)</option>
                <option value="Karur">Karur (கரூர்)</option>
                <option value="Krishnagiri">Krishnagiri (கிருஷ்ணகிரி)</option>
                <option value="Madurai">Madurai (மதுரை)</option>
                <option value="Mayiladuthurai">Mayiladuthurai (மயிலாடுதுறை)</option>
                <option value="Nagapattinam">Nagapattinam (நாகப்பட்டினம்)</option>
                <option value="Namakkal">Namakkal (நாமக்கல்)</option>
                <option value="Nilgiris">Nilgiris (நீலகிரி)</option>
                <option value="Perambalur">Perambalur (பெரம்பலூர்)</option>
                <option value="Pudukkottai">Pudukkottai (புதுக்கோட்டை)</option>
                <option value="Ramanathapuram">Ramanathapuram (ராமநாதபுரம்)</option>
                <option value="Ranipet">Ranipet (ராணிப்பேட்டை)</option>
                <option value="Salem">Salem (சேலம்)</option>
                <option value="Sivaganga">Sivaganga (சிவகங்கை)</option>
                <option value="Tenkasi">Tenkasi (தென்காசி)</option>
                <option value="Thanjavur">Thanjavur (தஞ்சாவூர்)</option>
                <option value="Theni">Theni (தேனி)</option>
                <option value="Thoothukudi">Thoothukudi (தூத்துக்குடி)</option>
                <option value="Tiruchirappalli">Tiruchirappalli (திருச்சிராப்பள்ளி)</option>
                <option value="Tirunelveli">Tirunelveli (திருநெல்வேலி)</option>
                <option value="Tirupathur">Tirupathur (திருப்பத்தூர்)</option>
                <option value="Tiruppur">Tiruppur (திருப்பூர்)</option>
                <option value="Tiruvallur">Tiruvallur (திருவள்ளூர்)</option>
                <option value="Tiruvannamalai">Tiruvannamalai (திருவண்ணாமலை)</option>
                <option value="Tiruvarur">Tiruvarur (திருவாரூர்)</option>
                <option value="Vellore">Vellore (வேலூர்)</option>
                <option value="Viluppuram">Viluppuram (விழுப்புரம்)</option>
                <option value="Virudhunagar">Virudhunagar (விருதுநகர்)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">College Choosing</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a College Type --</option>
                <option value="engineering">Engineering</option>
                <option value="arts_science">Arts & Science</option>
                <option value="polytechnic">Polytechnic</option>
                <option value="medical">Medical</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Address</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          {responseMessage && (
            <div id="response-message" style={{ 
              display: 'block', 
              marginTop: '20px', 
              padding: '10px', 
              borderRadius: '5px',
              backgroundColor: responseMessage.includes('success') ? '#d4edda' : '#f8d7da',
              color: responseMessage.includes('success') ? '#155724' : '#721c24'
            }}>
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;