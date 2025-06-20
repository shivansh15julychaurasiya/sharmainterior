import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const newsItems = [
  {
    logo: '/images/et.png',
    text: '“Sharma-Interior said it crossed the billion-dollar valuation mark after raising $180 million…”',
    link: 'https://economictimes.indiatimes.com/',
  },
  {
    logo: '/images/mint.png',
    text: '“Sharma-Interior joined the unicorn club after raising $180 mn at a valuation of over $1.2 bn…”',
    link: 'https://www.livemint.com/',
  },
  {
    logo: '/images/architect.png',
    text: '“The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration and tech”',
    link: 'https://www.architectandinteriorsindia.com/',
  },

];

const InTheNews = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="news-section">
      <div className="container py-5">
        <h2 className="news-heading text-center mb-5">📰 In the News</h2>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div className="news-card" data-aos="fade-up" key={index}>
              <div className="news-logo-wrapper mb-3">
                <img src={item.logo} alt="Logo" className="news-logo-img" />
              </div>
              <p className="news-text">{item.text}</p>
              <a
                className="news-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InTheNews;
