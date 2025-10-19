import { Shield, Users, Award, Zap, Star, ArrowRight, Building, MapPin, Clock } from 'lucide-react';
import image from '../assets/5.jpg'
const AboutSection = () => {
  return (
    <section id="about-us-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 lg:pr-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 rounded-full text-emerald-700 font-medium">
              <Zap className="w-5 h-5" />
              <span>About Bunny & Co.</span>
            </div>

            {/* Hero Text */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building Trust in 
                <span className="text-emerald-600 block">Every Property Deal</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Redefining Mumbai's real estate with transparency and excellence
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At <strong className="text-emerald-600">Bunny & Co. Realtors</strong>, we specialize in premium residential and commercial spaces 
                with <strong>zero brokerage on new projects</strong>.
              </p>
              <p>
                Our expert team ensures seamless experience from consultation to possession across Mumbai's prime locations.
              </p>
            </div>

            {/* Expertise Cards */}
            {/* <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Building, title: "Premium Properties", desc: "Curated luxury residences" },
                { icon: MapPin, title: "Prime Locations", desc: "Excellent connectivity" },
                { icon: Clock, title: "Zero Brokerage", desc: "Save lakhs on new projects" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div> */}

            {/* CTA */}
            {/* <div className="flex gap-4">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                Learn More
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Meet Team
              </button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <img
              src={image}
              alt="Mumbai properties"
              className="w-full h-96 lg:h-[500px] rounded-2xl shadow-xl object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 rounded-xl p-4 shadow-lg">
              <h3 className="font-bold text-gray-900">Mumbai's Finest</h3>
              <p className="text-sm text-gray-600">Premium Properties</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        {/* <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { number: "₹100Cr+", label: "Properties Sold" },
            { number: "1000+", label: "Happy Clients" },
            { number: "750+", label: "Projects" },
            { number: "15+", label: "Years" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;