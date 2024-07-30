import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/ProductType.css';

import GoldCard from '../assets/gold.jpg';
import PlatinumCrad from '../assets/platinum.jpg';
import TitaniumCrad from '../assets/titanium.jpg';


const products = [
  {
    type: 'GOLD',
    image: GoldCard, 
    description: 'Gold card offers ...',
  },
  {
    type: 'PLATINUM',
    image: PlatinumCrad, 
    description: 'Platinum card offers...',
  },
  {
    type: 'TITANIUM',
    image: TitaniumCrad, 
    description: 'Titanium card offers ...',
  },
];

const ProductCarousel = () => {
  return (

    <div className="carousel-container">
     
      <Carousel showThumbs={false} showStatus={false}>
        {products.map((product) => (
          <div className="carousel-slide" key={product.type}>
            <div className="image-section">
              <img src={product.image} alt={`${product.type} Card`} />
            </div>
            <div className="info-section">
              <h2>{product.type} Card</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;