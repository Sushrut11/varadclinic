import '../css/PostReview.css';

export default function PostReview() {
  const handleReviewClick = () => {
    const directReviewUrl = `https://maps.app.goo.gl/mwU6y6KvZ4GTSDf68?action=write_review`;
    window.open(directReviewUrl, '_blank');
  };

  return (
    <div className="post-review-section">
      <div className="review-strip">
        <div className="review-content">
          <h3>Share Your Experience</h3>
          <p>Had a positive experience? Help others discover our care!</p>
        </div>
        <button onClick={handleReviewClick} className="review-btn">
          Write Google Review
        </button>
      </div>
    </div>
  );
}
