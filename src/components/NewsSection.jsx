import { useState } from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: "Mumbai Property Prices Rise 12% in Q4 2024",
      excerpt: "Latest market analysis shows significant growth in residential property values across prime Mumbai locations.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-15",
      readTime: "5 min read",
      category: "market",
      featured: true
    },
    {
      id: 2,
      title: "New Metro Line Boosts Andheri Property Demand",
      excerpt: "The upcoming Metro Line 3 extension is driving unprecedented demand for properties in Andheri East and West.",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-12",
      readTime: "4 min read",
      category: "infrastructure"
    },
    {
      id: 3,
      title: "Zero Brokerage: A Game Changer for Home Buyers",
      excerpt: "How zero brokerage policies are revolutionizing the real estate market and saving buyers thousands.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-10",
      readTime: "6 min read",
      category: "trends"
    },
    {
      id: 4,
      title: "Commercial Real Estate Outlook 2025",
      excerpt: "Expert predictions for Mumbai's commercial property market in the coming year.",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-08",
      readTime: "7 min read",
      category: "commercial"
    },
    {
      id: 5,
      title: "Luxury Housing Segment Shows Strong Growth",
      excerpt: "Premium residential projects in BKC and Lower Parel witness increased investor interest.",
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-05",
      readTime: "5 min read",
      category: "luxury"
    },
    {
      id: 6,
      title: "Home Loan Interest Rates: What to Expect",
      excerpt: "Banking sector insights on home loan trends and interest rate predictions for 2025.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-12-03",
      readTime: "4 min read",
      category: "finance"
    }
  ];

  const categories = [
    { key: 'all', name: 'All News' },
    { key: 'market', name: 'Market Analysis' },
    { key: 'infrastructure', name: 'Infrastructure' },
    { key: 'trends', name: 'Trends' },
    { key: 'commercial', name: 'Commercial' },
    { key: 'luxury', name: 'Luxury' },
    { key: 'finance', name: 'Finance' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-8">
            📰 Latest News & Insights
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Stay Updated with
            <span className="text-blue-600"> Real Estate News</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get the latest insights, market trends, and expert analysis from Mumbai's real estate industry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && featuredArticle && (
          <div className="mb-16 lg:mb-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-6">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Featured Story
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(featuredArticle.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                
                <div className="relative">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Stay Informed</h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest real estate news and market insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;