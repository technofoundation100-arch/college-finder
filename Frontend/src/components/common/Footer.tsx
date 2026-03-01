import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone } from 'lucide-react'; // or your icon library of choice
import {
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import './Footer.css';

const Footer: React.FC = () => {
   const phoneNumber = "+916380539537";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;
  const email = "technofoundation100@gmail.com";
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CollegeFinder</h3>
              <p className="mb-4">
                Helping students find their perfect educational path since 2010.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/college" className="text-gray-400 hover:text-white">College Studies</a></li>
                <li><a href="/abroad" className="text-gray-400 hover:text-white">Abroad Studies</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>123 Education St, Learning City, TN 600001</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2" size={16} />
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
        </li>
                <li className="flex items-center">
        <Phone className="mr-2" size={16} />
        <div className="flex items-center space-x-2 col-white">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white-600 hover:text-green-800 ml-2"
          >
                      <span>{phoneNumber}</span>
          </a>
        </div>
      </li>
                <li className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  <span>Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Register</h4>
              <p className="mb-4 text-gray-400">
                Register to get updates on colleges, scholarships, and more.
              </p>
              <form className="flex">
                <Link to='/contact'><button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r"
                >
                  Register
                </button></Link>
              </form>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;