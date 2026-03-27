import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who Is This For', href: '#who-is-this-for' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'For Hospitals', href: '#for-hospitals' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Science', href: '#science' },
    { name: 'Research', href: '#research' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-orange) 100%)' }}
            >
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span 
              className="text-xl font-bold"
              style={{ 
                fontFamily: 'Poppins',
                color: isScrolled ? 'var(--text-primary)' : 'white'
              }}
            >
              CareDyad
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="body-small font-medium transition-colors hover:opacity-80"
                style={{ 
                  color: isScrolled ? 'var(--text-primary)' : 'white'
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="btn-primary">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? 'var(--text-primary)' : 'white' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mt-4 mb-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="body-standard font-medium py-2 hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-primary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary mt-4">
                Download App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
