import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '../components/Button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Features', 'Pricing', 'Testimonials'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* NeuroFlow Icon SVG */}
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <defs>
              <linearGradient id="violetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#A78BFA', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#A78BFA', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="fuchsiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#E879F9', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#E879F9', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#C084FC', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="indigoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{stopColor: '#818CF8', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#818CF8', stopOpacity: 1}} />
              </linearGradient>
              <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <g filter="url(#logoGlow)">
              <line x1="60" y1="25" x2="60" y2="175" stroke="url(#violetGrad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="60" y1="25" x2="140" y2="175" stroke="url(#fuchsiaGrad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="140" y1="25" x2="140" y2="175" stroke="url(#indigoGrad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
              
              <circle cx="60" cy="25" r="12" fill="#A78BFA"/>
              <circle cx="100" cy="100" r="12" fill="#E879F9"/>
              <circle cx="140" cy="175" r="12" fill="#818CF8"/>
              <circle cx="140" cy="25" r="12" fill="#818CF8"/>
              <circle cx="60" cy="175" r="12" fill="#A78BFA"/>
            </g>
          </svg>
          
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            NeuroFlow
          </span>
        </motion.a>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="ghost" size="sm" className="hidden sm:block">
            Sign In
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;