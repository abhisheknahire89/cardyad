import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
              CareDyad
            </h3>
            <p className="body-small mb-4 opacity-80">
              Relational Care. Profound Impact.
            </p>
            <p className="body-small opacity-70 max-w-md">
              Supporting caregivers and families managing chronic health conditions through evidence-based dyadic health solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#who-is-this-for" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Who Is This For
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#for-hospitals" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  For Hospitals
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: 'Poppins' }}>Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#research" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Our Research
                </a>
              </li>
              <li>
                <a href="#science" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  The Science
                </a>
              </li>
              <li>
                <a href="#story" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#privacy" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="body-small opacity-70 hover:opacity-100 hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-700">
          {/* USA Office */}
          <div>
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin size={18} style={{ color: 'var(--primary-blue)' }} />
              USA Office
            </h5>
            <p className="body-small opacity-70 mb-2">
              21165 Whitfield Pl, Suite #106<br />
              Sterling, VA 20165
            </p>
            <p className="body-small opacity-70 flex items-center gap-2">
              <Phone size={16} /> +1 571 934 7292
            </p>
          </div>

          {/* India Office */}
          <div>
            <h5 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin size={18} style={{ color: 'var(--primary-orange)' }} />
              India Office
            </h5>
            <p className="body-small opacity-70 mb-2">
              Madhapur<br />
              Hyderabad, Telangana 500081
            </p>
            <p className="body-small opacity-70 flex items-center gap-2">
              <Phone size={16} /> +91 910 085 6540
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="body-small opacity-70 flex items-center gap-2 justify-center">
            <Mail size={16} />
            <a href="mailto:info@dyadic.health" className="hover:underline">
              info@dyadic.health
            </a>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="body-small opacity-60 flex items-center justify-center gap-2">
            © {currentYear} Dyadic Health. All rights reserved. Made with <Heart size={14} fill="var(--primary-orange)" style={{ color: 'var(--primary-orange)' }} /> for caregivers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
