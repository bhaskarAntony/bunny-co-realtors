import { ChevronDown, ShieldCheck, Star, Phone, Award, X, Send, CheckCircle } from 'lucide-react';
import video from '../assets/hero-bg.mp4'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
   const locations = [
    'Andheri East',
    'Andheri West', 
    'Bandra East',
    'Bandra West',
    'Thane',
    'Navi Mumbai',
    'Powai',
    'Lower Parel',
    'Worli',
    'Juhu',
    'Other'
  ];

  const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

   const openModal = (image) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Initialize EmailJS (you'll need to get these from EmailJS dashboard)
      emailjs.init("Wv_Xx_UceT6Vlzmy3"); // Replace with your EmailJS public key
      const templateParams = {
        to_email: 'bunnyandco.realtors@gmail.com',
        // to_email: 'worke2339@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
        subject: 'New Property Inquiry from Website'
      };

      await emailjs.send(
        'service_b00pa7e', // Replace with your EmailJS service ID
        'template_r8ds4mm', // Replace with your EmailJS template ID
        templateParams
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        });
      }, 3000);
      
    } catch (error) {
      console.error('Email send failed:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <ShieldCheck className="w-4 h-4 text-violet-400 flex-shrink-0" />
          <span className="text-violet-300 text-sm font-medium uppercase tracking-wide">
            RERA Certified • 9+ Years Excellence
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="mb-6 lg:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          Mumbai's Premier
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-teal-400 to-violet-500 mt-4">
            Real Estate Partner
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Discover premium residential and commercial properties with expert guidance and{' '}
          <span className="text-violet-300 font-semibold">zero brokerage</span> on new projects
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
                <IconComponent className="w-6 h-6 text-violet-400 flex-shrink-0" />
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
            onClick={() => scrollToSection('services')}
            className="bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl shadow-2xl hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105 border border-violet-500/30"
            
          >
            Explore Premium Properties
          </button>
          
          <button
            onClick={openModal}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white hover:text-violet-300 border-2 border-white/20 hover:border-violet-400/50 px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105"
            
          >
            Book Free Consultation
          </button>
        </div>

        {/* Stats Highlights */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-sm lg:text-base mb-8">
          <div className="flex items-center gap-2 text-violet-400">
            <Star className="w-5 h-5" />
            <span className="font-semibold">₹50Cr+</span>
            <span className="text-gray-400">Properties Sold</span>
          </div>
          <div className="flex items-center gap-2 text-violet-400">
            <Award className="w-5 h-5" />
            <span className="font-semibold">1200+</span>
            <span className="text-gray-400">Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 text-violet-400">
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
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-violet-400/50 transition-colors duration-300 hover:bg-white/20"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </button>
        <span className="text-xs text-gray-400 mt-2 font-medium tracking-wide">Discover More</span>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 lg:w-48 lg:h-48 bg-violet-500/5 rounded-full blur-xl border border-violet-400/10 animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 lg:w-40 lg:h-40 bg-teal-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

 {showModal && (
  /* ── Backdrop ── */
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
    onClick={closeModal}
  >
    {/* ── Modal Card ── */}
    <div
      className="relative my-8 w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
        aria-label="Close"
      >
        <X className="h-5 w-5 text-gray-600" />
      </button>

      {/* Title */}
      <h3 className="mb-2 text-2xl font-bold text-gray-900">Book Free Consultation</h3>
      <p className="mb-6 text-sm text-gray-600">Get expert advice in under 2 minutes</p>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
        />

        {/* Location */}
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Preferred Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        {/* Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Message / Requirements"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500 resize-none"
        />

        {/* Error */}
        {submitError && (
          <p className="rounded bg-red-50 p-2 text-xs text-red-600">{submitError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-white transition-all duration-300 ${
            isSubmitted
              ? 'bg-green-600'
              : isSubmitting
              ? 'bg-violet-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
          }`}
        >
          {isSubmitted ? (
            <>
              <CheckCircle className="h-5 w-5" />
              Sent!
            </>
          ) : isSubmitting ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Request Callback
            </>
          )}
        </button>
      </form>

      {/* Footer Text */}
      <p className="mt-4 text-center text-xs text-gray-500">
        We’ll call you within <strong>5 minutes</strong>
      </p>
    </div>
  </div>
)}
    </section>
  );
};

export default HeroSection;