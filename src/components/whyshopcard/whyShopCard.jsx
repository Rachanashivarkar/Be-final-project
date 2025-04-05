import React from 'react';
import './whyShopCard.css';
import securedata from "./img/secure-data.png"
import tracking from "./img/tracking.png"
import delivery from "./img/delivery.png"
const cardData = [
  {
    id: 1,
    image:delivery,
    title: 'Superfast Delivery',
    description: 'Experience lightning-fast delivery that brings your medicines products straight to your doorstep in record time!'
  },
  {
    id: 2,
    image: securedata,
    title: 'Secure shopping',
    description: 'Shop with confidence knowing your personal and payment details are safe.'
  },
  {
    id: 3,
    image: tracking,
    title: 'Track medicine',
    description: 'Stay informed on your delivery status'
  }
];

function WhyShopCard() {
  return (
  <>

    <h2 className='card-why-shop-heading'>Why shop from Medifind?</h2>
        <div className='card-why-shop'>
      {cardData.map((card) => (
        <div key={card.id} className='card-why-shop-container'>
          <div className='card-why-shop-div1'>
            <img src={card.image} alt={card.title} />
          </div>
          <div className='card-why-shop-div2'>
            <span>{card.title}</span>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div></>

  );
}

export default WhyShopCard;
