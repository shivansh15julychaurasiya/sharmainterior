// components/TrustedPartners.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import './TrustedPartners.css'; // Custom styles

const partners = [
  { name: 'Saint-Gobain', img: '/public/images/saint.png' },
  { name: 'CenturyPly', img: '/public/images/century.png' },
  { name: 'Bosch', img: '/public/images/bosch.png'},
  { name: 'Siemens', img: '/public/images/siemens.png'},
  { name: 'Hettich', img: '/public/images/hettich.png'},
  { name: 'Greenlam', img: '/public/images/greenlam.png' },
  // Add more if needed
];

export default function TrustedPartners() {
  return (
    <section className="trusted-section">
      <div className="trusted-header">
        <h2>Our trusted partners</h2>
        <p>Winning collaborations that produce winning designs.</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="partner-card">
              <img src={partner.img} alt={partner.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
