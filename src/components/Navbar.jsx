import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-sm">
      <div className="text-2xl font-bold tracking-tighter">NeuroFlow</div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold">
        Let's talk
      </button>
    </nav>
  );
}