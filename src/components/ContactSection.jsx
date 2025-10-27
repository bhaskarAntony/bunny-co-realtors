import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Initialize EmailJS (you'll need to get these from EmailJS dashboard)
      emailjs.init("7ogPXMKfFPMLlyri8"); // Replace with your EmailJS public key
      const templateParams = {
        // to_email: 'bunnyandco.realtors@gmail.com',
        to_email: 'worke2339@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
        subject: 'New Property Inquiry from Website'
      };

      await emailjs.send(
        'service_3krkqnm', // Replace with your EmailJS service ID
        'template_vddatgd', // Replace with your EmailJS template ID
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-violet-50 via-violet-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-20 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-violet-100 rounded-full text-violet-800 font-medium mb-8 animate-fade-in">
            📞 Get in Touch
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 animate-slide-up">
            Let's Find Your Perfect
            <span className="text-violet-600"> Property Together</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            We're here to help you discover the right space — for your life, work, or investment. Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 py-10 lg:p-10 shadow-xl border border-white/50 animate-slide-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="animate-fade-in">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 text-lg"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="animate-fade-in delay-100">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-200">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="animate-fade-in delay-300">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 text-lg"
                  >
                    <option value="">Select location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="animate-fade-in delay-400">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Message / Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 resize-none text-lg"
                  placeholder="Tell us about your property requirements, budget, timeline, etc."
                />
              </div>
              
              {submitError && (
                <div className="text-red-600 text-sm bg-red-50 p-4 rounded-lg">
                  {submitError}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-5 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitted 
                    ? 'bg-violet-600 text-white' 
                    : isSubmitting
                    ? 'bg-violet-400 text-white cursor-not-allowed'
                    : 'bg-violet-600 hover:bg-violet-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Request a Call Back</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-right">
            {/* Contact Details */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 py-10 border border-white/50 hover:bg-white/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-lg">Office Address</div>
                    <div className="text-gray-600">Mumbai, Maharashtra</div>
                    <div className="text-gray-600">400064</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>                 <div>
                    <div className="font-medium text-gray-900 text-lg">Phone Number</div>
                    <div className="text-gray-600">+91 90829 89628 </div>
                    <div className="text-gray-600">+91 91365 46143 </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-lg">Email Address</div>
                    <div className="text-gray-600">bunnyandco.realtors@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-lg">Business Hours</div>
                    <div className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</div>
                    <div className="text-gray-600">Sun: 10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <MessageCircle className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold">Chat on WhatsApp</h3>
                  <p className="opacity-90">Quick responses guaranteed</p>
                </div>
              </div>
              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in buying a property."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-gray-900 py-4 rounded-xl font-semibold text-center hover:bg-gray-100 transition-colors text-lg"
              >
                Start WhatsApp Chat
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl mt-10 h-64 flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60292.73391049533!2d72.78325280938184!3d19.182275433830572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70a9af38905%3A0xe5707242078468a7!2sMalad%20Post%20Office!5e0!3m2!1sen!2sin!4v1761224391037!5m2!1sen!2sin" className='w-full rounded-2xl h-full'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;