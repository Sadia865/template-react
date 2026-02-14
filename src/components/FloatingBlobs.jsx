import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large purple blob - Responsive size */}
      <motion.div
        className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blue blob - Responsive size */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Pink blob - Responsive size, hidden on small mobile for performance */}
      <motion.div
        className="hidden sm:block absolute bottom-1/4 left-1/3 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-fuchsia-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cyan accent - Hidden on mobile for performance */}
      <motion.div
        className="hidden md:block absolute top-1/2 right-1/3 w-48 h-48 lg:w-64 lg:h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingBlobs;