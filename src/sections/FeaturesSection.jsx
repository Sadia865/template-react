import { motion } from 'framer-motion';
import { Brain, Zap, Target, Clock, BarChart3, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Task Prioritization',
      description: 'Let AI analyze your workload and automatically prioritize tasks based on deadlines, importance, and your work patterns.',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Automation Engine',
      description: 'Eliminate repetitive tasks with smart automation. Set it once, and let NeuroFlow handle the rest.',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Deep Work Sessions',
      description: 'Block distractions and enter flow state with AI-powered focus sessions tailored to your peak productivity hours.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Clock,
      title: 'Smart Time Tracking',
      description: 'Automatically track time spent on tasks and get insights on where your time goes without manual logging.',
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Visualize your productivity patterns with beautiful dashboards and actionable insights.',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Sparkles,
      title: 'Smart Summaries',
      description: 'Get AI-generated summaries of meetings, documents, and daily work to stay on top of everything.',
      gradient: 'from-rose-500 to-orange-600'
    }
  ];

  return (
    <section id="features" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="text-xs sm:text-sm text-gray-300">Features</span>
          </motion.div>
          
          {/* Title - Responsive sizing */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Everything you need to
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-2 sm:mt-0"> </span>
            <span className="text-gradient">work smarter</span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-6">
            Powerful AI features designed to eliminate busywork and help you focus on what truly matters.
          </p>
        </motion.div>

        {/* Features Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <GlassCard key={index} delay={index * 0.1} hover={true}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {/* Icon - Responsive size */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 glow`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                {/* Title - Responsive text */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                
                {/* Description - Responsive text */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;