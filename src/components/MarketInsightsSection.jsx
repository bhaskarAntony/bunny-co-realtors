import { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, MapPin, Calendar } from 'lucide-react';

const MarketInsightsSection = () => {
  const [selectedArea, setSelectedArea] = useState('andheri');

  const marketData = {
    andheri: {
      name: "Andheri East & West",
      priceRange: "₹15,000 - ₹25,000/sqft",
      growth: "+12%",
      trend: "up",
      avgPrice: "₹18,500",
      upcoming: "Metro Line 3, New IT Parks",
      demand: "High"
    },
    bandra: {
      name: "Bandra East & West",
      priceRange: "₹25,000 - ₹45,000/sqft",
      growth: "+8%",
      trend: "up",
      avgPrice: "₹32,000",
      upcoming: "Coastal Road, BKC Expansion",
      demand: "Very High"
    },
    thane: {
      name: "Thane Central",
      priceRange: "₹8,000 - ₹15,000/sqft",
      growth: "+15%",
      trend: "up",
      avgPrice: "₹11,500",
      upcoming: "Metro Extension, IT Hub",
      demand: "High"
    },
    powai: {
      name: "Powai",
      priceRange: "₹12,000 - ₹20,000/sqft",
      growth: "+10%",
      trend: "up",
      avgPrice: "₹15,800",
      upcoming: "Airport Link, Tech Parks",
      demand: "Moderate"
    }
  };

  const insights = [
    {
      icon: TrendingUp,
      title: "Property Prices Rising",
      description: "Mumbai property prices increased by 8-15% in 2024",
      color: "emerald"
    },
    {
      icon: BarChart3,
      title: "High Demand Areas",
      description: "Andheri, Bandra, and Thane showing strong buyer interest",
      color: "blue"
    },
    {
      icon: PieChart,
      title: "Investment Hotspots",
      description: "Commercial spaces in BKC and Lower Parel gaining traction",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Best Time to Buy",
      description: "Q1 2025 expected to offer attractive prices before peak season",
      color: "amber"
    }
  ];

  const areas = [
    { key: 'andheri', name: 'Andheri' },
    { key: 'bandra', name: 'Bandra' },
    { key: 'thane', name: 'Thane' },
    { key: 'powai', name: 'Powai' }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
            📊 Market Insights
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mumbai Real Estate
            <span className="text-blue-600"> Market Trends</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest market insights, price trends, and investment opportunities across Mumbai's prime locations.
          </p>
        </div>

        {/* Market Insights Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/50"
              >
                <div className={`w-12 h-12 rounded-xl bg-${insight.color}-100 flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 text-${insight.color}-600`} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Area-wise Analysis */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Area-wise Price Analysis</h3>
          
          {/* Area Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.map((area) => (
              <button
                key={area.key}
                onClick={() => setSelectedArea(area.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedArea === area.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>

          {/* Selected Area Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                {marketData[selectedArea].name}
              </h4>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">Price Range</div>
                  <div className="text-lg font-bold text-blue-600">{marketData[selectedArea].priceRange}</div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">Average Price</div>
                  <div className="text-lg font-bold text-emerald-600">{marketData[selectedArea].avgPrice}/sqft</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">YoY Growth</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-lg font-bold text-green-600">{marketData[selectedArea].growth}</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                  <div className="text-sm text-gray-600 mb-1">Demand Level</div>
                  <div className="text-lg font-bold text-amber-600">{marketData[selectedArea].demand}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
              <h5 className="font-bold text-gray-900 mb-3">Upcoming Developments</h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                {marketData[selectedArea].upcoming}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Detailed Report
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want Personalized Market Insights?</h3>
            <p className="mb-6 opacity-90">Get customized market analysis and investment recommendations for your preferred locations.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Request Custom Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsightsSection;