import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, LogIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">CareerPath Pro</h3>
          <p className="text-sm text-gray-400">
            Helping you grow, learn, and achieve your career goals. Empowering professionals for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/dashboard" className="hover:text-indigo-400">Dashboard</a></li>
            <li><a href="/insights" className="hover:text-indigo-400">Insights</a></li>
            <li><a href="/jobs" className="hover:text-indigo-400">Job Listings</a></li>
            <li><a href="/learning" className="hover:text-indigo-400">Learning Path</a></li>
            <li><a href="/profile" className="hover:text-indigo-400">My Profile</a></li>
            <li><a href="/login" className="hover:text-indigo-400 flex items-center"><LogIn className="h-4 w-4 mr-2" /> Login</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
              Bhopal, Madhya Pradesh, India
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-indigo-400" />
              +91 98765 43210
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-indigo-400" />
              support@careerpathpro.in
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-indigo-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" className="hover:text-indigo-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" className="hover:text-indigo-400">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>
          © 2024 CareerPath Pro. Made with ❤️ by Kshitij & Priya.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
