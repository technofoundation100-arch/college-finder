const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, district, subject, message } = req.body;

    // Create new contact entry
    const newContact = await Contact.create({
      name,
      email,
      phone,
      district,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for your registration! Our counselor will contact you shortly.',
      data: newContact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};