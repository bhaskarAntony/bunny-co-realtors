import { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Star, Phone, MapPin, Mail, ChevronLeft, ChevronRight, Heart, MessageCircle,  Share2, Instagram, Linkedin, Youtube } from 'lucide-react';
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
        <StatsSection />
        <ServicesSection />
        <InstagramReelsSection />
        {/* <ProcessSection /> */}
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />

      {/* Floating Chat & Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=919876543210&text=Hi%2C+I%27m+interested+in+buying+a+property.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919082989628"
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg flex items-center justify-center"
        >
         <Phone className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  );
}

export default App;
