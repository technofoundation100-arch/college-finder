const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const rateLimit = require('express-rate-limit');

// Rate limiting to prevent abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions from this IP, please try again after 15 minutes'
});

router.post('/api/contact', contactLimiter, contactController.submitContactForm);

module.exports = router;