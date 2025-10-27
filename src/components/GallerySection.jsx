import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: image1,
      title: "Luxury Apartment Complex",
      location: "Bandra West",
      type: "Residential"
    },
    {
      id: 2,
      src: image2,
      title: "Modern Penthouse",
      location: "Lower Parel",
      type: "Luxury"
    },
    {
      id: 3,
      src: image3,
      title: "Independent Villa",
      location: "Juhu",
      type: "Villa"
    },
    {
      id: 4,
      src: image4,
      title: "Commercial Office Space",
      location: "BKC",
      type: "Commercial"
    },
    {
      id: 5,
      src: image5,
      title: "Industrial Warehouse",
      location: "Bhiwandi",
      type: "Industrial"
    }
  ];

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate max index based on viewport
  const getMaxIndex = () => {
    return isMobile ? galleryImages.length - 1 : galleryImages.length - 3;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
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

    const threshold = 80; // Lowered for better UX
    const maxIndex = getMaxIndex();

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragOffset < 0 && currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const nextSlide = () => {
    const maxIndex = getMaxIndex();
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // Prevent context menu on long press (mobile)
  useEffect(() => {
    const preventLongPress = (e) => e.preventDefault();
    if (containerRef.current) {
      containerRef.current.addEventListener('contextmenu', preventLongPress);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('contextmenu', preventLongPress);
      }
    };
  }, []);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 rounded-full text-emerald-800 font-medium mb-8">
            Property Gallery
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Explore Our
            <span className="text-emerald-600"> Premium Properties</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take a visual tour of our carefully curated portfolio of luxury residential, commercial, and investment properties across Mumbai.
          </p>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="w-1/3 flex-shrink-0 px-3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <button
                      onClick={() => openModal(image)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
                    >
                      <ZoomIn className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= galleryImages.length - 3}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Gallery */}
        <div className="lg:hidden">
          <div 
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            <div 
              className="flex"
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {galleryImages.map((image) => (
                <div key={image.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    <button
                      onClick={() => openModal(image)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between px-4 mt-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= galleryImages.length - 1}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'bg-emerald-600 w-8 h-2' 
                    : 'bg-gray-300 w-2 h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;