import { 
  Home, Building2, DollarSign, FileText, Calculator, MapPin, Users, Briefcase,
  Check, Clock, Shield, TrendingUp, Star, Phone, Mail , ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Home,
      title: "Property Consultation",
      description: "Expert guidance to find your perfect home with personalized recommendations",
      features: ["500+ successful consultations", "Market trend analysis", "Lifestyle matching"],
      stats: "500+ Clients",
      color: "bg-emerald-300",
      hoverColor: "hover:bg-emerald-100",
      textColor: "text-white",
      borderColor: "border-emerald-400",
      text:"text-green-700"
    },
    {
      icon: Building2,
      title: "Home Loan Assistance",
      description: "Fast-track approvals with exclusive bank partnerships and best rates",
      features: ["₹250Cr+ loans processed", "48-hour pre-approval", "Documentation support", "Rate comparison"],
      stats: "₹250Cr+ Loans",
      color: "bg-blue-300",
      hoverColor: "hover:bg-blue-700",
      textColor: "text-white",
      borderColor: "border-blue-400",
      text:"text-blue-700",
    },
    {
      icon: DollarSign,
      title: "Investment Advisory",
      description: "Data-driven strategies to maximize your property investment returns",
      features: ["28% average ROI", "Risk assessment", "Portfolio diversification", "Market timing"],
      stats: "28% Avg Returns",
      color: "bg-purple-300",
      hoverColor: "hover:bg-purple-700",
      textColor: "text-white",
      borderColor: "border-purple-400",
      text:"text-pink-700"
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Complete legal verification and hassle-free paperwork processing",
      features: ["100% compliance rate", "Title verification", "Agreement drafting", "Fast registration"],
      stats: "100% Compliance",
      color: "bg-amber-200",
      hoverColor: "hover:bg-amber-600",
      textColor: "text-white",
      borderColor: "border-amber-400",
      text:"text-amber-700"
    },
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Accurate market value assessments for confident buying decisions",
      features: ["98% valuation accuracy", "Comparative analysis", "Future projections", "Certified reports"],
      stats: "98% Accuracy",
      color: "bg-red-300",
      hoverColor: "hover:bg-red-700",
      textColor: "text-white",
      borderColor: "border-red-400",
      text:"text-red-700"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Strategic analysis of connectivity, amenities, and growth potential",
      features: ["200+ locations analyzed", "Infrastructure mapping", "Growth forecasting", "Amenity scoring"],
      stats: "200+ Locations",
      color: "bg-green-300",
      hoverColor: "hover:bg-green-700",
      textColor: "text-white",
      borderColor: "border-green-400",
      text:"text-green-700"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Complete rental solutions with tenant management and maintenance",
      features: ["95% occupancy rate", "Tenant screening", "Rent optimization", "24/7 support"],
      stats: "95% Occupancy",
      color: "bg-indigo-300",
      hoverColor: "hover:bg-indigo-700",
      textColor: "text-white",
      borderColor: "border-indigo-400",
      text:"text-indigo-700"
    },
    {
      icon: Briefcase,
      title: "Commercial Real Estate",
      description: "Specialized services for offices, retail spaces, and business properties",
      features: ["50+ commercial deals", "Lease negotiations", "Space planning", "ROI analysis"],
      stats: "50+ Deals",
      color: "bg-pink-300",
      hoverColor: "hover:bg-pink-700",
      textColor: "text-white",
      borderColor: "border-pink-400",
      text:"text-pink-700"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-emerald-50">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white shadow-lg rounded-full text-emerald-600 font-semibold mb-8 border border-emerald-200">
            <Star className="w-5 h-5" />
            <span>Premium Real Estate Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Real Estate 
            <span className="text-emerald-600 block">Solutions</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end services designed to simplify your real estate journey with expert guidance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl h-[480px] p-6 lg:p-8 transition-all duration-500 ${service.color} ${service.textColor} ${service.borderColor} ${service.text} border-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  {/* <div className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm text-xs font-bold border border-white/20">
                    {service.stats}
                  </div> */}
                </div>

                {/* Main Content - Always Visible */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm mb-6 leading-relaxed opacity-95">
                    {service.description}
                  </p>

                  {/* Features - Always Visible */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-auto pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs opacity-80">
                      <Phone className="w-3 h-3 mr-1" />
                      <span>24/7 Support</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-transform">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${service.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10 scale-105`}></div>
              </div>
            );
          })}
        </div>

        {/* Featured Services Row */}
        {/* <div className="mt-16 grid md:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className={`rounded-2xl p-6 ${service.color} ${service.textColor} shadow-lg border-t-4 ${service.borderColor}`}>
              <service.icon className="w-8 h-8 mb-3 opacity-90" />
              <h4 className="font-bold text-lg mb-2">{service.title.split(' ')[0]}</h4>
              <p className="text-xs opacity-90">{service.stats}</p>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <div className="bg-white shadow-2xl rounded-3xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to provide personalized guidance for all your real estate needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-50">
                View All Services
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .h-\\[480px\\] {
            height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;