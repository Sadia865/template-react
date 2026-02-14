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
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-indigo-950/5 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient">professionals</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our users have to say about their productivity transformation
          </p>
        </motion.div>

        {/* Scrolling testimonials */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-x-auto scrollbar-hide">
            <motion.div
              className="flex gap-6 pb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-8 min-w-[400px] max-w-[400px] glass-hover"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-600/20 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-violet-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;