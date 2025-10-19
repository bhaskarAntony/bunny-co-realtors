import { Search, Eye, FileCheck, Key, CheckCircle, Users, Calculator, Phone } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "Initial Consultation",
      description: "We understand your needs, budget, and preferences through a detailed consultation.",
      duration: "30 mins",
      color: "blue"
    },
    {
      icon: Search,
      title: "Property Search",
      description: "Our experts curate a list of properties matching your exact requirements.",
      duration: "1-3 days",
      color: "emerald"
    },
    {
      icon: Eye,
      title: "Site Visits",
      description: "Guided property visits with detailed insights about location, amenities, and investment potential.",
      duration: "1-2 weeks",
      color: "purple"
    },
    {
      icon: Calculator,
      title: "Price Negotiation",
      description: "We negotiate the best price and terms on your behalf with our market expertise.",
      duration: "2-5 days",
      color: "amber"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete legal verification, documentation, and paperwork handled by our experts.",
      duration: "1-2 weeks",
      color: "red"
    },
    {
      icon: Users,
      title: "Loan Assistance",
      description: "Home loan guidance and assistance with bank tie-ups for best interest rates.",
      duration: "2-3 weeks",
      color: "indigo"
    },
    {
      icon: CheckCircle,
      title: "Registration",
      description: "Property registration and legal transfer with complete documentation support.",
      duration: "1 week",
      color: "pink"
    },
    {
      icon: Key,
      title: "Possession",
      description: "Key handover and possession with post-sales support and assistance.",
      duration: "1 day",
      color: "green"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-6">
            🔄 Our Process
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Property Journey
            <span className="text-emerald-600"> Made Simple</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to key handover, we guide you through every step of your property journey with transparency and expertise.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>
            
            <div className="grid grid-cols-4 gap-8 mb-12">
              {steps.slice(0, 4).map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative text-center group">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${step.color}-100 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${step.color}-600`} />
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-emerald-400 rounded-full z-20"></div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <div className="text-xs text-emerald-600 font-medium bg-emerald-100 rounded-full px-3 py-1 inline-block">
                      {step.duration}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second Row */}
            <div className="relative">
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {steps.slice(4, 8).map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index + 4} className="relative text-center group">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${step.color}-100 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 text-${step.color}-600`} />
                      </div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-emerald-400 rounded-full z-20"></div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        {step.description}
                      </p>
                      <div className="text-xs text-emerald-600 font-medium bg-emerald-100 rounded-full px-3 py-1 inline-block">
                        {step.duration}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-12 h-12 rounded-xl bg-${step.color}-100 flex items-center justify-center`}>
                      <IconComponent className={`w-10 h-10 text-${step.color}-600`} />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-emerald-200"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-xs text-emerald-600 font-medium bg-emerald-100 rounded-full px-3 py-1">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Property Journey?</h3>
            <p className="text-gray-600 mb-6">Let our experts guide you through a smooth and transparent property buying experience.</p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey Today
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProcessSection;