import { TrendingUp, Users, Home, Award, Zap, Star, X, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const StatsSection = () => {
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
  const stats = [
    {
      icon: TrendingUp,
      number: "₹50Cr+",
      label: "Properties Sold",
      description: "Total value of premium properties successfully transacted"
    },
    {
      icon: Users,
      number: "2,500+",
      label: "Happy Clients",
      description: "Satisfied customers across Mumbai and beyond"
    },
    {
      icon: Home,
      number: "20+",
      label: "Projects Completed",
      description: "Successful property deals from start to finish"
    },
    {
      icon: Award,
      number: "9+",
      label: "Years Experience",
      description: "Trusted expertise in Mumbai real estate market"
    }
  ];

  return (
    <section id="stats-section" className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-violet-900">
      {/* Dark Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500/20 backdrop-blur-sm rounded-full text-violet-300 font-medium mb-6 border border-violet-400/30">
            <Zap className="w-5 h-5" />
            <span>Success Metrics</span>
            <Star className="w-5 h-5 text-violet-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 via-white to-violet-300 bg-clip-text text-transparent mb-6">
            Our Proven Track Record
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Milestones that showcase our dedication to excellence and client trust
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group relative bg-black/30 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-violet-500/20 hover:border-violet-400/40 hover:bg-black/40 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                
                {/* Icon */}
                <div className="flex-shrink-0 mb-6">
                  <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto border border-violet-400/30 group-hover:border-violet-400/50 transition-all">
                    <IconComponent className="w-8 h-8 text-violet-300 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 via-white to-violet-300 bg-clip-text text-transparent mb-4 text-center">
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-violet-200 text-sm leading-relaxed text-center opacity-80">
                  {stat.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className=" lg:inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-4 border border-violet-500/20">
            <span className="text-violet-300 font-medium">Join thousands of satisfied clients</span>
            <button className="bg-violet-600 mt-10 md:mt-0 hover:bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg" onClick={openModal}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

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

export default StatsSection;