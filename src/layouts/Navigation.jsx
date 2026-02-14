import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = ['Features', 'Pricing', 'Testimonials'];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3 md:py-4' : 'py-4 md:py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2 md:gap-3 z-50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* NeuroFlow Icon SVG - Responsive size */}
            <svg 
              width="32" 
              height="32"
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
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
            
            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              NeuroFlow
            </span>
          </motion.a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm lg:text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center gap-3 lg:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="ghost" size="sm" className="text-sm lg:text-base">
              Sign In
            </Button>
            <Button variant="primary" size="sm" className="text-sm lg:text-base">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden tap-target glass glass-hover rounded-lg p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] glass border-l border-white/10 z-40 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 pt-24">
                {/* Mobile Nav Items */}
                <div className="space-y-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block tap-target px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    variant="ghost" 
                    className="w-full tap-target justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    variant="primary" 
                    className="w-full tap-target justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;