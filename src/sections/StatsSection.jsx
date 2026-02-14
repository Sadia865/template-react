import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';

const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animation = animate(count, value, { duration });
          return () => animation.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <motion.span ref={nodeRef}>
      {rounded}
      {suffix}
    </motion.span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: 250,
      suffix: '%',
      label: 'Productivity Increase',
      description: 'Average boost reported by users',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Users',
      description: 'Professionals trust NeuroFlow',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Clock,
      value: 15,
      suffix: 'hrs',
      label: 'Saved Per Week',
      description: 'Time automated on average',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      value: 1000000,
      suffix: '+',
      label: 'Tasks Automated',
      description: 'Total tasks completed by AI',
      gradient: 'from-fuchsia-500 to-pink-600'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-violet-950/10 to-dark-950"></div>
      
      {/* Floating glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Trusted by <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join professionals who've transformed their productivity with NeuroFlow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 text-center glass-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 glow`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;