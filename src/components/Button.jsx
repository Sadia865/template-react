import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = "relative font-semibold rounded-xl transition-all duration-300 overflow-hidden group tap-target flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 active:from-violet-700 active:to-indigo-700",
    secondary: "glass text-white glass-hover",
    ghost: "text-white hover:bg-white/5 active:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs sm:text-sm min-h-[44px]",
    md: "px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base min-h-[44px]",
    lg: "px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg min-h-[48px]"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Glow effect on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 blur-xl"></span>
      </span>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Shimmer effect - only on primary buttons */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default Button;