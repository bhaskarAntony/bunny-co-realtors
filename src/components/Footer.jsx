import { Building2, Instagram, Linkedin, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
          <img src={logo} width={100} alt="" className='bg-white rounded-xl mb-4' />

            <p className="text-gray-300 leading-relaxed mb-6">
              Redefining real estate with trust, transparency, and expertise. Your trusted partner for premium properties in Mumbai.
            </p>
            
            {/* <div className="flex space-x-4">
              <a
                href="https://instagram.com/bunnyandcorealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/bunnyandcorealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@bunnyandcorealtors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/9082989628"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#properties')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#instagram')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  Instagram
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Property Consultation</li>
              <li>Home Loan Assistance</li>
              <li>Investment Advisory</li>
              <li>Documentation Support</li>
              <li>Property Management</li>
              <li>Legal Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mumbai, Maharashtra</div>
                  <div>400064</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-violet-400" />
                <div>+91 90829 89628 /+91 9136546143 </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-violet-400" />
                <div>bunnyandco.realtors@gmail.com</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-violet-600 rounded-lg">
              <div className="text-sm font-medium mb-1">Zero Brokerage Guarantee</div>
              <div className="text-xs opacity-90">Save thousands on new projects</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 Bunny & Co. Realtors. All rights reserved.
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;