
import { useState, useEffect, useRef } from 'react';
import '../css/Testimonial.css';
import arrowSvg from '../assets/arrow.svg'; 

const mockReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    description: "Excellent homeopathic treatment! Dr. helped me completely recover from chronic sinusitis without any side effects. Highly recommended for natural healing."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 5,
    description: "Amazing results for my migraine problem. The personalized treatment approach and caring staff made all the difference. Thank you!"
  },
  {
    id: 3,
    name: "Anita Desai",
    rating: 4,
    description: "Very satisfied with the treatment for my anxiety issues. The clinic has a peaceful environment and the doctor explains everything clearly."
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef();

  // Clean up timer on unmount or change
  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 10000); // 10 sec
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + mockReviews.length) % mockReviews.length);
      setIsAnimating(false);
    }, 350);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockReviews.length);
      setIsAnimating(false);
    }, 350);
  };

  const review = mockReviews[currentIndex];

  return (
    <div className="testimonial-section-vertical">
      <div className="testimonial-header">
        <h2>What Our Patients Say About Us</h2>
        <p>Real experiences from our valued patients</p>
      </div>
      <div className="arrow-controls arrow-above">
        <button className="arrow-btn" onClick={handlePrev} aria-label="Previous review">
          <img src={arrowSvg} className="arrow-svg rotate-up" alt="Up arrow" />
        </button>
      </div>
      <div className={`testimonial-card-vertical${isAnimating ? ' animating' : ''}`}>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`star ${i < review.rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="review-text">"{review.description}"</p>
        <div className="reviewer-info">
          <h4>{review.name}</h4>
        </div>
      </div>
      <div className="arrow-controls arrow-below">
        <button className="arrow-btn" onClick={handleNext} aria-label="Next review">
          <img src={arrowSvg} className="arrow-svg rotate-down" alt="Down arrow" />
        </button>
      </div>
    </div>
  );
}
