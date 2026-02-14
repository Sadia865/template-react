import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-8 ${hover ? 'glass-hover cursor-pointer' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;