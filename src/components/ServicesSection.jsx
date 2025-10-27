import { 
  Home, Building2, DollarSign, FileText, Calculator, MapPin, Users, Briefcase,
  Check, Clock, Shield, TrendingUp, Star, Phone, Mail, ArrowRight
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
      color: "bg-violet-100/70",
      hoverColor: "hover:bg-violet-200/80",
      textColor: "text-violet-900",
       iconBgColor: "bg-violet-900",
      borderColor: "border-violet-200/50",
      glowColor: "bg-violet-300/30"
    },
    {
      icon: Building2,
      title: "Home Loan Assistance",
      description: "Fast-track approvals with exclusive bank partnerships and best rates",
      features: ["₹250Cr+ loans processed", "48-hour pre-approval", "Documentation support", "Rate comparison"],
      stats: "₹250Cr+ Loans",
      color: "bg-blue-100/70",
      hoverColor: "hover:bg-blue-200/80",
      textColor: "text-blue-900",
       iconBgColor: "bg-blue-900",
      borderColor: "border-blue-200/50",
      glowColor: "bg-blue-300/30"
    },
    {
      icon: DollarSign,
      title: "Investment Advisory",
      description: "Data-driven strategies to maximize your property investment returns",
      features: ["28% average ROI", "Risk assessment", "Portfolio diversification", "Market timing"],
      stats: "28% Avg Returns",
      color: "bg-purple-100/70",
      hoverColor: "hover:bg-purple-200/80",
      textColor: "text-purple-900",
       iconBgColor: "bg-purple-900",
      borderColor: "border-purple-200/50",
      glowColor: "bg-purple-300/30"
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Complete legal verification and hassle-free paperwork processing",
      features: ["100% compliance rate", "Title verification", "Agreement drafting", "Fast registration"],
      stats: "100% Compliance",
      color: "bg-amber-100/70",
      hoverColor: "hover:bg-amber-200/80",
      textColor: "text-amber-900",
       iconBgColor: "bg-amber-900",
      borderColor: "border-amber-200/50",
      glowColor: "bg-amber-300/30"
    },
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Accurate market value assessments for confident buying decisions",
      features: ["98% valuation accuracy", "Comparative analysis", "Future projections", "Certified reports"],
      stats: "98% Accuracy",
      color: "bg-red-100/70",
      hoverColor: "hover:bg-red-200/80",
      textColor: "text-red-900",
      iconBgColor: "bg-red-900",
      borderColor: "border-red-200/50",
      glowColor: "bg-red-300/30"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Strategic analysis of connectivity, amenities, and growth potential",
      features: ["200+ locations analyzed", "Infrastructure mapping", "Growth forecasting", "Amenity scoring"],
      stats: "200+ Locations",
      color: "bg-green-100/70",
      hoverColor: "hover:bg-green-200/80",
      textColor: "text-green-900",
        iconBgColor: "bg-green-900",
      borderColor: "border-green-200/50",
      glowColor: "bg-green-300/30"
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Complete rental solutions with tenant management and maintenance",
      features: ["95% occupancy rate", "Tenant screening", "Rent optimization", "24/7 support"],
      stats: "95% Occupancy",
      color: "bg-indigo-100/70",
      hoverColor: "hover:bg-indigo-200/80",
      textColor: "text-indigo-900",
        iconBgColor: "bg-indigo-900",
      borderColor: "border-indigo-200/50",
      glowColor: "bg-indigo-300/30"
    },
    {
      icon: Briefcase,
      title: "Commercial Real Estate",
      description: "Specialized services for offices, retail spaces, and business properties",
      features: ["50+ commercial deals", "Lease negotiations", "Space planning", "ROI analysis"],
      stats: "50+ Deals",
      color: "bg-pink-100/70",
      hoverColor: "hover:bg-pink-200/80",
      textColor: "text-pink-900",
        iconBgColor: "bg-pink-900",
      borderColor: "border-pink-200/50",
      glowColor: "bg-pink-300/30"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-violet-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-violet-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-100/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-violet-700 font-semibold mb-8 border border-violet-100/50 shadow-sm">
            <Star className="w-5 h-5" />
            <span>Premium Real Estate Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive Real Estate 
            <span className="text-violet-600 block">Solutions</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover tailored services to simplify your real estate journey with expert guidance and unmatched expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl h-[480px] p-6 lg:p-8 transition-all duration-500 ${service.color} ${service.textColor} ${service.borderColor} border backdrop-blur-md shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] flex flex-col`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 ${service.iconBgColor} rounded-xl backdrop-blur-sm border border-white/20`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm text-xs font-semibold border border-white/20">
                    {service.stats}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base mb-6 leading-relaxed opacity-90">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 mt-1 mr-3 flex-shrink-0 opacity-80" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                {/* <div className="mt-auto pt-4 border-t border-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs opacity-80">
                      <Phone className="w-3 h-3 mr-1" />
                      <span>24/7 Support</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-transform duration-300">
                      Explore Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div> */}

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 ${service.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 scale-105`}></div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .h-\\[480px\\] {
            height: 440px !important;
          }
          .text-4xl {
            font-size: 2.25rem;
          }
          .text-xl {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;