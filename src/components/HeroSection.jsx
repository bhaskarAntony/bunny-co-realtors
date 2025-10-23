import { ChevronDown, ShieldCheck, Star, Phone, Award } from 'lucide-react';
import video from '../assets/hero-bg.mp4'

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Autoplay Background Video */}
      <div className="absolute inset-0">
        <video
        src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
         
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
        
        {/* Trust Badge */}
        <div className="mb-6 lg:mb-10 inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-lg mt-10">
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-300 text-sm font-medium uppercase tracking-wide">
            RERA Certified • 9+ Years Excellence
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-6 lg:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          Mumbai's Premier
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 mt-4">
            Real Estate Partner
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Discover premium residential and commercial properties with expert guidance and{' '}
          <span className="text-emerald-300 font-semibold">zero brokerage</span> on new projects
        </p>

        {/* Key Benefits Grid */}
        <div className="mb-10 lg:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Star, label: "Zero Brokerage", desc: "Save lakhs on new bookings" },
            { icon: Award, label: "RERA Certified", desc: "100% legal compliance" },
            { icon: Phone, label: "24/7 Support", desc: "Expert consultation" }
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <IconComponent className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">{benefit.label}</div>
                  <div className="text-gray-400 text-xs">{benefit.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16 max-w-2xl mx-auto">
          <button
            onClick={() => scrollToSection('properties')}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 border border-emerald-500/30"
          >
            Explore Premium Properties
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white hover:text-emerald-300 border-2 border-white/20 hover:border-emerald-400/50 px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Stats Highlights */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-sm lg:text-base mb-8">
          <div className="flex items-center gap-2 text-emerald-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">₹50Cr+</span>
            <span className="text-gray-400">Properties Sold</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <Award className="w-5 h-5" />
            <span className="font-semibold">1200+</span>
            <span className="text-gray-400">Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold">9+</span>
            <span className="text-gray-400">Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-emerald-400/50 transition-colors duration-300 hover:bg-white/20"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
        <span className="text-xs text-gray-400 mt-2 font-medium tracking-wide">Discover More</span>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 lg:w-48 lg:h-48 bg-emerald-500/5 rounded-full blur-xl border border-emerald-400/10 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 lg:w-40 lg:h-40 bg-teal-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;