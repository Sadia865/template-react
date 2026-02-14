import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

const AIDemoSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fullText = "Break down my project into actionable tasks and prioritize them based on deadlines";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTyping && displayedText === '') {
          setIsTyping(true);
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setDisplayedText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
              setIsTyping(false);
            }
          }, 30);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('ai-demo');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [displayedText, isTyping]);

  const aiResponse = [
    { task: "Research competitor features", priority: "High", time: "2h" },
    { task: "Create wireframes for dashboard", priority: "High", time: "3h" },
    { task: "Setup development environment", priority: "Medium", time: "1h" },
    { task: "Write technical documentation", priority: "Medium", time: "2h" },
    { task: "Review team feedback", priority: "Low", time: "30min" }
  ];

  return (
    <section id="ai-demo" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            See <span className="text-gradient">AI in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how NeuroFlow understands your needs and provides intelligent assistance
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8 md:p-12 border-2 border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Chat interface */}
          <div className="space-y-6">
            {/* User message */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">You</span>
              </div>
              <div className="glass rounded-2xl rounded-tl-none px-6 py-4 flex-1">
                <p className="text-gray-200">
                  {displayedText}
                  {isTyping && <span className="inline-block w-0.5 h-5 bg-violet-400 ml-1 animate-pulse"></span>}
                </p>
              </div>
            </motion.div>

            {/* AI response */}
            {displayedText.length === fullText.length && (
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="glass rounded-2xl rounded-tl-none px-6 py-4">
                    <p className="text-gray-200 mb-4">
                      I've analyzed your project and created a prioritized task list:
                    </p>
                    
                    <div className="space-y-3">
                      {aiResponse.map((item, index) => (
                        <motion.div
                          key={index}
                          className="glass rounded-xl p-4 flex items-center justify-between"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              item.priority === 'High' ? 'bg-red-400' :
                              item.priority === 'Medium' ? 'bg-yellow-400' : 'bg-green-400'
                            }`}></div>
                            <span className="text-gray-200">{item.task}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                              item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 
                              'bg-green-500/20 text-green-300'
                            }`}>
                              {item.priority}
                            </span>
                            <span className="text-sm text-gray-400">{item.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input box */}
          <motion.div
            className="mt-8 glass rounded-2xl p-4 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <input
              type="text"
              placeholder="Ask AI anything about your workflow..."
              className="flex-1 bg-transparent outline-none text-gray-300 placeholder:text-gray-500"
              disabled
            />
            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center hover:scale-105 transition-transform">
              <Send className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemoSection;