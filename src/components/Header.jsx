import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/podcast', label: 'Podcast' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 group focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="Podcast Creator - Ir al inicio"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              {/* Mic Icon Simple SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-900 leading-none">Podcast Creator</p>
              <p className="text-sm text-gray-500 font-medium">Tu espacio de audio</p>
            </div>
          </Link>

          <nav aria-label="Navegación principal">
            <ul className="flex items-center space-x-2 md:space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
