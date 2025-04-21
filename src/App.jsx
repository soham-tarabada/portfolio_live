import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import ThreeBodyLoader from './components/ThreeBodyLoader'; // Make sure the path is correct

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ThreeBodyLoader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio_live" element={<Home />} />
        <Route path="/portfolio_live/about" element={<About />} />
        <Route path="/portfolio_live/contact" element={<Contact />} />
        <Route path="/portfolio_live/projects" element={<Project />} />
        <Route path="/portfolio_live/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;