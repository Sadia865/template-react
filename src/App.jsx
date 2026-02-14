import Navigation from './layouts/Navigation';
import Footer from './layouts/Footer';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AIDemoSection from './sections/AIDemoSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CTASection from './sections/CTASection';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AIDemoSection />
\        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;