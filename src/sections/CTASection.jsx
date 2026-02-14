import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-indigo-900/20 to-purple-900/20"></div>
      
      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">Start Your Journey</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ready to <span className="text-gradient">transform</span>
            <br />
            your productivity?
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who've already unlocked their full potential with NeuroFlow's AI-powered workspace.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="primary" size="lg" className="group min-w-[200px]">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Schedule Demo
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
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
              className="glass rounded-2xl p-6"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;