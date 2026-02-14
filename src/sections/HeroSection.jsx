import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import FloatingBlobs from '../components/FloatingBlobs';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-dark-950 to-dark-950"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Floating blobs */}
      <FloatingBlobs />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm text-gray-300">Powered by Advanced AI</span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Your AI-Powered
          <br />
          <span className="text-gradient">Productivity Workspace</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Automate repetitive tasks, prioritize with AI intelligence, and achieve 
          deep work like never before. NeuroFlow adapts to your workflow.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button variant="primary" size="lg" className="group">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10"></div>
          
          {/* Glow behind dashboard */}
          <div className="absolute -inset-20 bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-purple-600/30 blur-3xl opacity-50"></div>
          
          <div className="relative glass rounded-2xl p-8 border-2 border-white/10">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="glass px-4 py-2 rounded-lg text-sm">
                neuroflow.ai/dashboard
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Task card */}
              <motion.div
                className="glass rounded-xl p-6 space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2 text-violet-400">
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                  <span className="text-sm font-medium">High Priority</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-violet-500 to-transparent rounded-full w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-transparent rounded-full w-1/2"></div>
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full w-5/6"></div>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">2.5x</div>
                <div className="text-sm text-gray-400">Productivity Boost</div>
                <div className="mt-4 h-20 flex items-end gap-1">
                  {[40, 60, 45, 75, 90, 80].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-500 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.6, delay: 1.6 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* AI suggestion card */}
              <motion.div
                className="glass rounded-xl p-6 space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Suggestion</span>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 2 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    Schedule deep work session...
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;