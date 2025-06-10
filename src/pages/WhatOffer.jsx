// WhatWeOffer.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import './WhatWeOffer.css';

const offerCards = [
  {
    title: 'Our services',
    icon: '/public/images/icon3.png',
    points: [
      'Modular kitchens',
      'Modular wardrobes',
      'Lighting',
      'Flooring',
      'Electrical work',
      'Civil work',
      'False ceiling',
      'Wall design & painting',
    ],
  },
  {
    title: 'Warranty',
    icon: '/public/images/icon2.png',
    points: [
      'FLAT 10-year warranty¹ - Stay worry-free with our warranty policy on modular products.',
      'Up to 1-year on-site service warranty¹ - for painting, electrical, plumbing, etc.',
    ],
  },
  {
    title: 'Technology & science',
    icon: '/public/images/icon4.png',
    points: [
      'AquaBloc® Technology - No moisture enters the panels.',
      'AntiBubble® Technology - No air bubbles in finish.',
      'DuraBuild™ Technology - Robust cabinet structure.',
      'Design Science - Accessibility & stress-free use.',
    ],
  },
  {
    title: 'Modular Furniture',
    icon: '/public/images/icon3.png',
    points: [
      'Custom-designed beds, tables, and chairs.',
      'Perfect fit for your home interior.',
    ],
  },
  {
    title: 'On-site Services',
    icon: '/public/images/icon3.png',
    points: [
      'Painting, plumbing, tiling, and carpentry.',
      'One-stop solution for complete home makeover.',
    ],
  },
];

function WhatWeOffer() {
  return (
    <section className="offer-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What we offer</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {offerCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="offer-card">
                <div>
                  <div className="d-flex align-items-center mb-3">
                    <img src={card.icon} alt="icon" className="offer-icon me-2" />
                    <h5 className="fw-bold mb-0">{card.title}</h5>
                  </div>
                  <ul className="offer-points">
                    {card.points.map((point, i) => (
                      <li key={i} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default WhatWeOffer;
