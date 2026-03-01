import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Layout from './layouts/Layout';
import 'font-awesome/css/font-awesome.min.css';
import 'aos/dist/aos.css';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import College from './pages/College';
import Abroad from './pages/Abroad';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="college" element={<College />} />
          <Route path="abroad" element={<Abroad />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;