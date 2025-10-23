import { TrendingUp, Users, Home, Award, Zap, Star } from 'lucide-react';

const StatsSection = () => {
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
    <section id="stats-section" className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-emerald-900">
      {/* Dark Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 font-medium mb-6 border border-emerald-400/30">
            <Zap className="w-5 h-5" />
            <span>Success Metrics</span>
            <Star className="w-5 h-5 text-emerald-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent mb-6">
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
              <div key={index} className="group relative bg-black/30 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-black/40 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                
                {/* Icon */}
                <div className="flex-shrink-0 mb-6">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto border border-emerald-400/30 group-hover:border-emerald-400/50 transition-all">
                    <IconComponent className="w-8 h-8 text-emerald-300 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent mb-4 text-center">
                  {stat.number}
                </div>
                
                {/* Label */}
                <h3 className="text-white font-semibold text-lg mb-3 text-center">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-emerald-200 text-sm leading-relaxed text-center opacity-80">
                  {stat.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className=" lg:inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-4 border border-emerald-500/20">
            <span className="text-emerald-300 font-medium">Join thousands of satisfied clients</span>
            <button className="bg-emerald-600 mt-10 md:mt-0 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;