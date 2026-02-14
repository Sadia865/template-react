import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-indigo-900/20 to-purple-900/20"></div>
      
      {/* Animated blobs - responsive size and reduced motion on mobile */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-violet-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="text-xs sm:text-sm text-gray-300">Start Your Journey</span>
          </motion.div>

          {/* Main Heading - Responsive text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Ready to <span className="text-gradient">transform</span>
            <br />
            your productivity?
          </h2>

          {/* Description - Responsive text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 sm:px-6">
            Join thousands of professionals who've already unlocked their full potential with NeuroFlow's AI-powered workspace.
          </p>

          {/* CTA Buttons - Stack on mobile */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="primary" size="lg" className="group w-full sm:w-auto min-w-[200px]">
              Start Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              Schedule Demo
            </Button>
          </motion.div>

          {/* Fine print */}
          <motion.p
            className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </motion.div>

        {/* Stats Cards - Responsive grid */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: '2.5x', sublabel: 'Productivity Boost' },
            { label: '15hrs', sublabel: 'Saved Weekly' },
            { label: '50k+', sublabel: 'Happy Users' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6"
              whileHover={{ y: -4 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;