import { Linkedin, Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "15+ Years",
      specialization: "Luxury Properties",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Leading Mumbai's premium real estate market with unmatched expertise and client-first approach."
    },
    {
      name: "Priya Patel",
      role: "Head of Sales",
      experience: "12+ Years",
      specialization: "Residential Sales",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Specializes in finding perfect homes for families with personalized service and market insights."
    },
    {
      name: "Amit Kumar",
      role: "Investment Advisor",
      experience: "10+ Years",
      specialization: "Commercial Properties",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Expert in commercial real estate investments and portfolio optimization strategies."
    },
    {
      name: "Sneha Gupta",
      role: "Legal Advisor",
      experience: "8+ Years",
      specialization: "Documentation",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Ensures seamless legal processes and documentation for all property transactions."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-6">
            👥 Our Team
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="text-emerald-600"> Expert Team</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals bring decades of combined expertise to help you make the best real estate decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-3xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-emerald-600 font-medium mb-1">
                  {member.role}
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>{member.experience}</span>
                  <span>•</span>
                  <span>{member.specialization}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-emerald-100 hover:bg-emerald-600 text-emerald-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Work With Us?</h3>
            <p className="text-gray-600 mb-6">Connect with our experts for personalized real estate guidance.</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;