import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "IT Professional",
      location: "Purchased 3BHK in Andheri",
      rating: 5,
      text: "Bunny & Co. made my home buying journey incredibly smooth. The zero brokerage policy saved me over ₹2 lakhs, and their transparency throughout the process was exceptional. Highly recommend!",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "TechCorp Solutions"
    },
    {
      name: "Kavya Sharma",
      role: "Marketing Manager",
      location: "Invested in Commercial Space",
      rating: 5,
      text: "The team's market knowledge is outstanding. They helped me identify a commercial property with excellent ROI potential. The legal support and documentation process was seamless.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "Digital Marketing Pro"
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "Villa in Juhu",
      rating: 5,
      text: "After working with multiple agents, Bunny & Co. stood out for their professionalism and integrity. They found us our dream villa and handled everything from negotiation to possession.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "Kumar Enterprises"
    },
    {
      name: "Preeti Agarwal",
      role: "Doctor",
      location: "2BHK in Bandra",
      rating: 5,
      text: "Excellent service and support throughout my property purchase. The team was always available for queries and made sure I got the best deal. The home loan assistance was particularly helpful.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "HealthCare Plus"
    },
    {
      name: "Vikram Singh",
      role: "Investment Advisor",
      location: "Multiple Property Portfolio",
      rating: 5,
      text: "As someone who invests in multiple properties, I appreciate Bunny & Co.'s market insights and investment guidance. They've helped me build a strong real estate portfolio in Mumbai.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "WealthMax Advisors"
    },
    {
      name: "Anita Desai",
      role: "Architect",
      location: "Studio Apartment in Powai",
      rating: 5,
      text: "Being in the construction industry, I'm quite particular about property quality. Bunny & Co. understood my requirements perfectly and found me a well-designed space with great amenities.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      website: "Design Studio Mumbai"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-8">
            ⭐ Client Stories
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            What Our Clients
            <span className="text-emerald-600"> Say About Us</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real experiences from real clients who trusted us with their property dreams and investment goals.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden border border-white/50">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center opacity-50">
              <Quote className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-4 ring-emerald-100">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-emerald-600 font-medium mb-1 text-lg">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {testimonials[currentIndex].website}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-emerald-600"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-emerald-600 w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-emerald-600"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">2500+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">₹0</div>
            <div className="text-gray-600">Hidden Charges</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;