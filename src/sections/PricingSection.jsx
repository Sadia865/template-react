import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 50 tasks per month',
        'Basic AI prioritization',
        '5 automation workflows',
        'Email support',
        '1GB storage'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '29',
      description: 'For professionals who need more power',
      features: [
        'Unlimited tasks',
        'Advanced AI features',
        'Unlimited automations',
        'Priority support',
        '50GB storage',
        'Team collaboration',
        'Custom integrations',
        'Analytics dashboard'
      ],
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '99',
      description: 'For teams and organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom AI training',
        'SSO & advanced security',
        'Unlimited storage',
        'API access',
        'SLA guarantee',
        'On-premise deployment'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
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
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="text-xs sm:text-sm text-gray-300">Pricing</span>
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Choose your <span className="text-gradient">plan</span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-6">
            Start free, upgrade as you grow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
                plan.highlighted ? 'border-2 border-violet-500/50 glass-hover md:scale-105' : 'glass-hover'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <div className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-violet-500/50">
                    <span className="text-gradient">{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Glow effect for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 -z-10"></div>
              )}

              {/* Plan Details */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
                
                {/* Price - responsive text */}
                <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gradient">${plan.price}</span>
                  <span className="text-sm sm:text-base text-gray-400">/month</span>
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.highlighted ? 'primary' : 'secondary'} 
                  className="w-full text-sm sm:text-base"
                >
                  {plan.price === '0' ? 'Start Free' : 'Start Trial'}
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  >
                    {/* Checkmark */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    
                    {/* Feature text */}
                    <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ link */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base text-gray-400 px-4">
            Need a custom plan?{' '}
            <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors underline">
              Contact sales
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;