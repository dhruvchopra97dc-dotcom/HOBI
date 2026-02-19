import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Play Now', path: '/play-now' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#1E2A47' }}>
              HOBI
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors px-2 ${
                  isActive(item.path)
                    ? 'text-[#FF5A36] border-b-2 border-[#FF5A36] pb-1'
                    : 'text-[#1E2A47] hover:text-[#FF5A36]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/early-access"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg ml-6"
              style={{
                background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap'
              }}
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: '#1E2A47' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: '#1E2A47' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(item.path)
                    ? 'bg-[#FF5A36]/10 text-[#FF5A36]'
                    : 'text-[#1E2A47] hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/early-access"
              className="block mx-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #FF5A36 0%, #FF8A5C 100%)',
                fontFamily: 'Inter, sans-serif'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Early Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
