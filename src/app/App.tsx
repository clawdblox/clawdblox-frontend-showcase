import '../styles/fonts.css';
import '../styles/theme.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import RobloxShowcase from './components/RobloxShowcase';
import HowItWorks from './components/HowItWorks';
import CodeExamples from './components/CodeExamples';
import Architecture from './components/Architecture';
import DemoPreview from './components/DemoPreview';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen bg-[#24272F] text-white font-sans selection:bg-[#05b6f8]/30 overflow-x-hidden">
      <SEO />
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <RobloxShowcase />
      <HowItWorks />
      <CodeExamples />
      <Architecture />
      <DemoPreview />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
