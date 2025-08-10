import Testimonial from './Testimonial';
import PostReview from './PostReview';
import '../css/Reviews.css';

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <Testimonial />
        <div className="divider"></div>
        <PostReview />
      </div>
    </section>
  );
}
