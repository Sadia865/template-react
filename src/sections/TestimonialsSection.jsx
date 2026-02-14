import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      content: 'NeuroFlow completely transformed how I manage projects. The AI prioritization is incredible - it feels like having a personal productivity coach.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Software Engineer',
      company: 'DevStudio',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      content: 'I was skeptical about AI productivity tools, but NeuroFlow proved me wrong. It saves me at least 10 hours every week on repetitive tasks.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      company: 'Independent',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      content: 'As a freelancer juggling multiple clients, NeuroFlow keeps me organized and focused. The automation features are a game-changer.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      content: 'Our entire team uses NeuroFlow. The collaboration features and AI insights help us move faster without sacrificing quality.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      content: 'The analytics dashboard gives me clear visibility into my team\'s productivity. NeuroFlow has become essential to our workflow.',
      rating: 5
    },
    {
      name: 'Alex Kumar',
      role: 'Data Scientist',
      company: 'DataFlow Inc',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      content: 'Smart summaries and automated task tracking mean I spend less time on admin and more time on actual work. Absolutely worth it.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-indigo-950/5 to-dark-950"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
            Loved by <span className="text-gradient">professionals</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-6">
            See what our users have to say about their productivity transformation
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Gradient overlays - hidden on mobile */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none"></div>

          {/* Horizontal scroll on mobile, grid on large screens */}
          <div className="overflow-x-auto md:overflow-x-scroll lg:overflow-visible scrollbar-hide -mx-4 sm:mx-0">
            <motion.div
              className="flex md:grid md:grid-cols-2 lg:flex gap-4 sm:gap-6 pb-4 px-4 sm:px-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 min-w-[280px] sm:min-w-[320px] lg:min-w-[380px] max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] glass-hover flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Quote icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-600/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-white">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator for mobile */}
          <div className="md:hidden text-center mt-4">
            <p className="text-xs text-gray-500">← Swipe to see more →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;