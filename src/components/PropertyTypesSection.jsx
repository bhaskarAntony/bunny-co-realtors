import { Building2, Home, Store, Warehouse, Hotel, TreePine } from 'lucide-react';

const PropertyTypesSection = () => {
  const propertyTypes = [
    {
      icon: Home,
      title: "Residential Apartments",
      description: "Premium 1BHK to 5BHK apartments in Mumbai's prime locations",
      priceRange: "₹80L - ₹5Cr",
      locations: "Andheri, Bandra, Thane",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Building2,
      title: "Luxury Penthouses",
      description: "Ultra-luxury penthouses with panoramic city and sea views",
      priceRange: "₹3Cr - ₹25Cr",
      locations: "Worli, Lower Parel, BKC",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: TreePine,
      title: "Independent Villas",
      description: "Spacious villas with gardens and premium amenities",
      priceRange: "₹2Cr - ₹15Cr",
      locations: "Juhu, Versova, Powai",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Store,
      title: "Commercial Spaces",
      description: "Office spaces and retail outlets in business districts",
      priceRange: "₹50L - ₹10Cr",
      locations: "BKC, Lower Parel, Andheri",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Warehouse,
      title: "Industrial Properties",
      description: "Warehouses and manufacturing units in industrial zones",
      priceRange: "₹1Cr - ₹20Cr",
      locations: "Bhiwandi, Vasai, Tarapur",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Hotel,
      title: "Hospitality Projects",
      description: "Hotels and service apartments for investment opportunities",
      priceRange: "₹5Cr - ₹50Cr",
      locations: "Airport Area, BKC, Powai",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="properties" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-6">
            🏘️ Property Portfolio
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-emerald-600"> Property Type</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From luxury penthouses to commercial spaces, we offer a diverse portfolio of premium properties across Mumbai's most sought-after locations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((property, index) => {
            const IconComponent = property.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{property.priceRange}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {property.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {property.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      <span className="font-medium">Locations:</span>
                      <br />
                      {property.locations}
                    </div>
                    
                    <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;