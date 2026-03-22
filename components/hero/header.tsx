import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
// import { Button } from '../ui/button';

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 80, stiffness: 400 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className=\"container mx-auto px-6 py-4\">
        <div className=\"flex items-center justify-between\">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=\"flex items-center space-x-2 cursor-pointer\"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className=\"w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center\">
              <span className=\"text-xl\">🐝</span>
            </div>
            <span className=\"text-xl font-medium text-gray-900 balto-medium\">BeeClean</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className=\"hidden md:flex items-center space-x-8\">
            <button onClick={() => scrollToSection('features')} className=\"text-gray-700 hover:text-gray-900 transition-colors balto-book\">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className=\"text-gray-700 hover:text-gray-900 transition-colors balto-book\">
              How It Works
            </button>
            <button onClick={() => scrollToSection('faq')} className=\"text-gray-700 hover:text-gray-900 transition-colors balto-book\">
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className=\"hidden md:flex items-center space-x-4\">
            <Button
              variant=\"outline\"
              className=\"rounded-full border-gray-300 hover:border-green-600 hover:text-green-600 balto-book\"
              onClick={() => scrollToSection('final-cta')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className=\"md:hidden text-gray-900\"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className=\"md:hidden pt-4 pb-2\"
          >
            <nav className=\"flex flex-col space-y-3\">
              <button
                onClick={() => scrollToSection('features')}
                className=\"text-left text-gray-700 hover:text-gray-900 py-2 balto-book\"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className=\"text-left text-gray-700 hover:text-gray-900 py-2 balto-book\"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className=\"text-left text-gray-700 hover:text-gray-900 py-2 balto-book\"
              >
                FAQ
              </button>
              <Button
                className=\"rounded-full bg-green-700 hover:bg-green-600 balto-book mt-2\"
                onClick={() => scrollToSection('final-cta')}
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
