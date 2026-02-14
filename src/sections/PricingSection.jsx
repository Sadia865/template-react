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
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">Pricing</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Choose your <span className="text-gradient">plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, upgrade as you grow. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative glass rounded-3xl p-8 ${
                plan.highlighted ? 'border-2 border-violet-500/50 glass-hover' : 'glass-hover'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="glass px-4 py-2 rounded-full text-sm font-medium border border-violet-500/50">
                    <span className="text-gradient">{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Glow effect for highlighted plan */}
              {plan.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-gradient">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>

                <Button 
                  variant={plan.highlighted ? 'primary' : 'secondary'} 
                  className="w-full"
                >
                  {plan.price === '0' ? 'Start Free' : 'Start Trial'}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400">
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