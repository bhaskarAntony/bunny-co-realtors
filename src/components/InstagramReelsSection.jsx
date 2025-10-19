import { useState, useRef, useEffect } from 'react';
import { Heart, MessageCircle, Share2, Instagram, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import video1 from '../assets/Video1.mp4';
import video2 from '../assets/Video2.mp4';
import video3 from '../assets/Video3.mp4';
import video4 from '../assets/Video4.mp4';
import video5 from '../assets/Video5.mp4';

const InstagramReelsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const containerRef = useRef(null);

  const reels = [
    {
      id: 1,
      videoUrl: video1,
      title: "Mumbai's Premium Locations",
      views: "12.5K",
      likes: "892",
      description: "Explore the most sought-after residential areas in Mumbai with our expert guide.",
    },
    {
      id: 2,
      videoUrl: video2,
      title: "Zero Brokerage Explained",
      views: "8.3K",
      likes: "634",
      description: "How our zero brokerage policy saves you thousands on your property purchase.",
    },
    {
      id: 3,
      videoUrl: video3,
      title: "Investment Tips 2024",
      views: "15.7K",
      likes: "1.2K",
      description: "Smart real estate investment strategies for maximum returns in current market.",
    },
    {
      id: 4,
      videoUrl: video4,
      title: "Property Documentation",
      views: "6.9K",
      likes: "478",
      description: "Complete guide to property documentation process and legal requirements.",
    },
    {
      id: 5,
      videoUrl: video5,
      title: "Luxury Projects Tour",
      views: "22.1K",
      likes: "1.8K",
      description: "Virtual tour of Mumbai's most luxurious upcoming residential projects.",
    },
  ];

  // Function to generate thumbnail from video
  const generateThumbnail = (videoUrl, id) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      video.src = videoUrl;
      video.muted = true;
      video.currentTime = 1; // Capture frame at 1 second

      video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailUrl = canvas.toDataURL('image/jpeg');
        resolve({ id, thumbnailUrl });
      });

      video.load();
    });
  };

  // Generate thumbnails when component mounts
  useEffect(() => {
    const generateAllThumbnails = async () => {
      const thumbnailPromises = reels.map((reel) => generateThumbnail(reel.videoUrl, reel.id));
      const thumbnailResults = await Promise.all(thumbnailPromises);
      const thumbnailMap = thumbnailResults.reduce((acc, { id, thumbnailUrl }) => {
        acc[id] = thumbnailUrl;
        return acc;
      }, {});
      setThumbnails(thumbnailMap);
    };

    generateAllThumbnails();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < reels.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  const openVideoModal = (reel) => {
    setSelectedVideo(reel);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
  };

  return (
    <section id="instagram" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-pink-800 font-medium mb-8">
            🎬 From Our Instagram
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Real Stories &
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Expert Insights</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            See real stories, expert advice, and property insights shared by Bunny & Co. Realtors on Instagram. Follow us for quick insights and authentic property walkthroughs.
          </p>
        </div>

        {/* Tinder-style Card Stack */}
        <div className="relative max-w-sm mx-auto mb-16 lg:mb-20">
          <div
            ref={containerRef}
            className="relative h-[500px] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            {reels.map((reel, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              const isPrev = index < currentIndex;
              const isNext = index > currentIndex;

              return (
                <div
                  key={reel.id}
                  className={`absolute inset-0 bg-white rounded-3xl shadow-2xl transition-all duration-500 transform ${
                    isActive
                      ? `translate-x-0 translate-y-0 scale-100 z-30 ${isDragging ? `translate-x-[${dragOffset}px]` : ''}`
                      : isPrev
                      ? '-translate-x-8 -translate-y-4 scale-95 z-20 opacity-70'
                      : isNext
                      ? 'translate-x-8 translate-y-4 scale-90 z-10 opacity-50'
                      : 'translate-x-16 translate-y-8 scale-85 z-0 opacity-25'
                  }`}
                  style={{
                    transform: isActive && isDragging
                      ? `translateX(${dragOffset}px) rotate(${dragOffset * 0.1}deg)`
                      : undefined,
                  }}
                >
                  <div className="relative h-full overflow-hidden rounded-3xl">
                    {thumbnails[reel.id] ? (
                      <img
                        src={thumbnails[reel.id]}
                        alt={reel.title}
                        className="w-full h-full object-cover"
                        draggable="false"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span>Loading thumbnail...</span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{reel.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{reel.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 hover:scale-110 transition-transform">
                            <Heart className="w-5 h-5 text-red-500 fill-current" />
                            <span className="text-sm">{reel.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:scale-110 transition-transform">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm">{Math.floor(parseInt(reel.likes) * 0.3)}</span>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="text-sm opacity-75">{reel.views} views</div>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => openVideoModal(reel)}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                      >
                        <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
            <button
              onClick={prevReel}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-gray-600 hover:text-emerald-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
            <button
              onClick={nextReel}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-gray-600 hover:text-emerald-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/bunny.co_realtors?igsh=aGV1YzVyMmxpbm4w&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-6 h-6" />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-200">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramReelsSection;