// import { Home, HandHeart, Briefcase, FileCheck, Shield, Award, Users, TrendingUp } from 'lucide-react';

// const WhyChooseSection = () => {
//   const features = [
//     {
//       icon: Home,
//       title: "Zero Brokerage Advantage",
//       description: "Save big on new projects — no hidden charges, complete transparency in pricing.",
//       color: "emerald",
//       bgImage: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: HandHeart,
//       title: "Transparency First",
//       description: "Every deal. Every detail. 100% clarity guaranteed throughout your journey.",
//       color: "blue",
//       bgImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: Briefcase,
//       title: "Expert Consultation",
//       description: "Personalized advice from experienced real estate professionals with deep market knowledge.",
//       color: "purple",
//       bgImage: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: FileCheck,
//       title: "Complete Assistance",
//       description: "From paperwork to home loan approvals — we handle it all seamlessly.",
//       color: "amber",
//       bgImage: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: Shield,
//       title: "Legal Protection",
//       description: "Complete legal verification and documentation support for secure transactions.",
//       color: "red",
//       bgImage: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: Award,
//       title: "Award Winning Service",
//       description: "Recognized for excellence in customer service and professional standards.",
//       color: "green",
//       bgImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: Users,
//       title: "Dedicated Support",
//       description: "Personal relationship manager assigned for end-to-end support.",
//       color: "indigo",
//       bgImage: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Market Insights",
//       description: "Access to exclusive market data and investment opportunities.",
//       color: "pink",
//       bgImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
//     }
//   ];

//   return (
//     <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden">
//       {/* Enhanced Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-emerald-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1000ms'}}></div>
//         <div className="absolute top-1/2 left-5 sm:left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-teal-200 rounded-full blur-2xl opacity-15 animate-bounce" style={{animationDelay: '500ms'}}></div>
//         <div className="absolute top-1/4 right-10 sm:right-1/3 w-12 sm:w-20 h-12 sm:h-20 bg-blue-200 rounded-full blur-xl opacity-10 animate-ping" style={{animationDelay: '2000ms'}}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
//         {/* Header Section - Mobile Optimized */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
//           <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-6 sm:mb-8 text-sm sm:text-base animate-fade-in">
//             💎 Why Choose Us
//           </div>
          
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
//             Why Choose{' '}
//             <span className="text-emerald-600 block sm:inline">Bunny & Co. Realtors?</span>
//           </h2>
          
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 animate-fade-in-delay">
//             We don't just sell properties — we build trust and lifelong relationships through exceptional service and unwavering commitment.
//           </p>
//         </div>

//         {/* Features Grid - Mobile First */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             const animationDelay = `${Math.min(index * 100, 700)}ms`; // Cap delay for mobile
            
//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 animate-fade-in-up bg-white"
//                 style={{ animationDelay }}
//               >
//                 {/* Background Image with Better Mobile Handling */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={feature.bgImage}
//                     alt={feature.title}
//                     className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 sm:from-black/80 via-black/40 sm:via-black/50 to-transparent group-hover:from-black/85 sm:group-hover:from-black/90 transition-all duration-500"></div>
//                 </div>

//                 {/* Content - Mobile Optimized */}
//                 <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end h-64 sm:h-80 text-white min-h-[300px] sm:min-h-[320px]">
//                   {/* Icon Container */}
//                   <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}-200/30`}>
//                     <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
//                   </div>
                  
//                   {/* Title */}
//                   <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-emerald-300 transition-colors line-clamp-2">
//                     {feature.title}
//                   </h3>
                  
//                   {/* Description */}
//                   <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity line-clamp-3 sm:line-clamp-none">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Enhanced Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 sm:from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
//                 {/* Mobile Swipe Indicator */}
//                 <div className="absolute top-2 right-2 sm:hidden bg-white/20 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA Button - Mobile Optimized */}
//         <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center">
//           <button className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 sm:px-12 py-3 sm:py-4 md:py-6 rounded-full font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
//             <span>Discover Our Difference</span>
//             <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Swipe Hint */}
//         <div className="sm:hidden mt-6 text-center text-gray-500 text-sm">
//           <p className="flex items-center justify-center gap-2">
//             <span>Swipe to explore</span>
//             <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @media (max-width: 640px) {
//           .line-clamp-2 {
//             display: -webkit-box;
//             -webkit-line-clamp: 2;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }
//           .line-clamp-3 {
//             display: -webkit-box;
//             -webkit-line-clamp: 3;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }
//         }
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//         @keyframes bounce-slow {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-10px); }
//           60% { transform: translateY(-5px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default WhyChooseSection;

import React from 'react'

function WhyChooseSection() {
  return (
    <div>WhyChooseSection</div>
  )
}

export default WhyChooseSection