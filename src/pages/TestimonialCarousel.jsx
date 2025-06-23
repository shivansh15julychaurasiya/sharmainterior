import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Vijay Mehta',
    feedback: 'SharmaInterior completely transformed my kitchen. The design, execution, and finish are top-notch!',
    image: '/images/client1.png',
    rating: 5
  },
  {
    name: 'Vedprakash Sharma',
    feedback: 'Their team was professional and delivered the wardrobe on time with stunning quality.',
    image: '/images/client2.png',
    rating: 4
  },
  { name: 'Ramesh Jaiswal',
    feedback: 'Loved the service and design suggestions. The interior now feels luxurious yet practical!',
    image: '/images/client3.png',
    rating: 5
  }
];

const TestimonialGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container py-5">
        <h2 className="text-center text-white mb-5">💬 What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index} data-aos="fade-up">
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="testimonial-text">{item.feedback}</p>
              <div className="d-flex align-items-center mt-4">
                <img src={item.image} alt={item.name} className="testimonial-img me-3" />
                <div>
                  <h5 className="mb-0">{item.name}</h5>
                  <div className="text-warning">
                    {[...Array(item.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
