import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#1E2A47', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8">
          {/* Brand */}
          <div className="flex-1">
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              HOBI
            </div>
            <p className="text-gray-300 text-sm max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Building the social infrastructure layer for sports communities in India.
            </p>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Link to="/" className="text-gray-300 hover:text-[#18B0A5] transition-colors text-sm">
                Home
              </Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-[#18B0A5] transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/play-now" className="text-gray-300 hover:text-[#18B0A5] transition-colors text-sm">
                Play Now
              </Link>
              <Link to="/early-access" className="text-gray-300 hover:text-[#18B0A5] transition-colors text-sm">
                Get Early Access
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2025 HOBI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <button className="text-gray-400 hover:text-[#18B0A5] transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-[#18B0A5] transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
