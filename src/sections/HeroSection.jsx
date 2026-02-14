import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import FloatingBlobs from '../components/FloatingBlobs';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-dark-950 to-dark-950"></div>
      
      {/* Grid pattern - responsive opacity */}
      <div className="absolute inset-0 grid-pattern opacity-50 md:opacity-50"></div>
      
      {/* Floating blobs - hidden on small mobile for performance */}
      <div className="hidden sm:block">
        <FloatingBlobs />
      </div>

      {/* Radial glow - responsive size */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-violet-600/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
          <span className="text-xs sm:text-sm text-gray-300">Powered by Advanced AI</span>
        </motion.div>

        {/* Main Heading - Responsive text sizes */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Your AI-Powered
          <br />
          <span className="text-gradient">Productivity Workspace</span>
        </motion.h1>

        {/* Subtitle - Responsive text and spacing */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Automate repetitive tasks, prioritize with AI intelligence, and achieve 
          deep work like never before. NeuroFlow adapts to your workflow.
        </motion.p>

        {/* CTA Buttons - Stack on mobile, row on desktop */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button variant="primary" size="lg" className="group w-full sm:w-auto min-w-[200px]">
            Start Free Trial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
            Watch Demo
          </Button>
        </motion.div>

        {/* Dashboard mockup - Responsive layout */}
        <motion.div
          className="relative max-w-6xl mx-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent z-10"></div>
          
          {/* Glow behind dashboard - responsive size */}
          <div className="absolute -inset-10 sm:-inset-20 bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-purple-600/30 blur-3xl opacity-50"></div>
          
          <div className="relative glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 sm:border-2">
            {/* Dashboard header - Responsive spacing */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="hidden sm:block glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
                neuroflow.ai/dashboard
              </div>
            </div>

            {/* Dashboard content - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {/* Task card */}
              <motion.div
                className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-2 text-violet-400">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-400"></div>
                  <span className="text-xs sm:text-sm font-medium">High Priority</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 sm:h-2 bg-gradient-to-r from-violet-500 to-transparent rounded-full w-3/4"></div>
                  <div className="h-1.5 sm:h-2 bg-gradient-to-r from-indigo-500 to-transparent rounded-full w-1/2"></div>
                  <div className="h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-transparent rounded-full w-5/6"></div>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                className="glass rounded-lg sm:rounded-xl p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">2.5x</div>
                <div className="text-xs sm:text-sm text-gray-400">Productivity Boost</div>
                <div className="mt-3 sm:mt-4 h-16 sm:h-20 flex items-end gap-1">
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

              {/* AI suggestion card - Full width on mobile */}
              <motion.div
                className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3 sm:col-span-2 md:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">AI Suggestion</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-gray-400">
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
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;