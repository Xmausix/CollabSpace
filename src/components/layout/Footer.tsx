import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Twitter, Facebook, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Categories', href: '/categories' },
        { label: 'Create Quiz', href: '/create' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Blog', href: '/blog' },
        { label: 'Guidelines', href: '/guidelines' },
        { label: 'Quiz Tips', href: '/tips' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
      ]
    }
  ];
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and socials */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center">
              <BrainCircuit className="h-8 w-8 text-violet-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CollabSpace</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Creating and sharing knowledge through interactive quizzes.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-violet-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-violet-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-violet-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="mailto:hello@collabspace.com" className="text-gray-400 hover:text-violet-600 transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-gray-600 hover:text-violet-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CollabSpace. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-pink-500" /> by the CollabSpace Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;