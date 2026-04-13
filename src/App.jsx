import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import ReportGenerator from './components/ReportGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
        {/* Navigation & Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 container mx-auto px-4 focus:outline-none" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Global Accessibility Audit Utility */}
          <section className="my-16" aria-label="Utilidades de accesibilidad">
            <ReportGenerator />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
