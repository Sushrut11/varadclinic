import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Hero.css';

// Desktop slides (2 slides) - DB1.jpg & DB2.jpg
const desktopSlides = [
  { 
    image: "/images/DB1.jpg", 
    imageAlt: "Healing with Purpose and Passion at Varad Clinic",

  },
  { 
    image: "/images/DB2.jpg", 
    imageAlt: "Comprehensive Services at Varad Clinic",

  }
];

// Mobile slides (3 slides) - MOM.jpg, DAD.jpg, HeroM3.jpg
const mobileSlides = [
  { 
    image: "/images/MOM.jpg", 
    imageAlt: "Dr. Manisha Ursal - Homeopathic Care",
    overlayText: "Gentle Homeopathic Care for Natural Healing",
    hasOverlay: true
  },
  { 
    image: "/images/DAD.jpg", 
    imageAlt: "Dr. P. M. Ursal - Ayurveda & General Medicine",
    overlayText: "Expert Ayurveda & General Medicine Solutions",
    hasOverlay: true
  },
  { 
    image: "/images/HeroM3.jpg", 
    imageAlt: "Varad Clinic - Complete Healthcare",
    text: "Compassionate Care for Every Family",
    hasOverlay: false
  }
];

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    <section className="hero-section" id="home">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={700}
      >
        {currentSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div 
              className="hero-slide-content"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
              role="img"
              aria-label={slide.imageAlt}
            >

              {isMobile && slide.hasOverlay && (
                <div className="hero-overlay-text">
                  {slide.overlayText}
                </div>
              )}
              
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
