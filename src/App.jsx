import { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Star, Phone, MapPin, Mail, ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, Instagram, Linkedin, Youtube } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import InstagramReelsSection from './components/InstagramReelsSection';
import PropertyTypesSection from './components/PropertyTypesSection';
import ProcessSection from './components/ProcessSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="pt-0">
        <HeroSection />
        <AboutSection />
        {/* <WhyChooseSection /> */}
        <StatsSection />
        <ServicesSection />
        <InstagramReelsSection />
        {/* <PropertyTypesSection /> */}
        <ProcessSection />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;