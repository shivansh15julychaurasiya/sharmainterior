import React from 'react';

const newsItems = [
  {
    logo: 'The Economic Times',
    text: '“Sharma-Interior said it crossed the billion-dollar valuation mark after raising $180 million in a late-stage funding round led by KKR & Co…”',
  },
  {
    logo: 'mint',
    text: '“Sharma-Interior has joined the unicorn club after the online home décor startup backed by private equity firm TPG raised $180 mn at a valuation of over $1.2 bn…”',
  },
  {
    logo: 'ARCHITECT and INTERIORS INDIA',
    text: '“The 23,000 sq-ft Bengaluru centre, designed by FITCH Singapore, combines inspiration, information and technology”',
  },
  {
    logo: 'The Economic Times',
    text: '“The company has also opened Experience Centres (ECs) spanning 1500 sq ft each in prime locations in all four cities.”',
  },
];

const InTheNews = () => {
  return (
    <div className="news-section">
      <h2 className="news-heading">In the news</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <h3 className="news-logo">{item.logo}</h3>
            <p className="news-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InTheNews;
