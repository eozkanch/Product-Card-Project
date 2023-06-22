import Image from 'next/image';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const ProductCard = ({ title, image, price, discount, rate }) => {

  const MAX_RATE = 5; // Maximum number of stars

  const renderStars = () => {
    const filledStars = rate;
    const emptyStars = MAX_RATE - filledStars;

    const stars = [];

    // Add full stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={i} color="success" />);
    }

    // Add blank stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOutlineIcon key={filledStars + i} color="action" />);
    }

    return stars;
  };
  const renderPrice = () => {
    if (discount > 0) {
      // If there is a discount, show the old price and the discounted price
      const discountedPrice = price - (price * discount) / 100;

      return (
        <Card.Text>
          <span disabled style={{ textDecoration: 'line-through',color: 'gray' }}>${price}</span> {' '}
          <span style={{ fontWeight: 'bold', color: 'green' }}>${discountedPrice.toFixed(2)}</span>
        </Card.Text>
      );
    } else {
      // If there is no discount just show the price
      return (
        <Card.Text>
           <span style={{ fontWeight: 'bold', color: 'green' }}>${price}</span>
        </Card.Text>
      );
    }
  };
  return (
   
   
     <Card className='mb-3 ' style={{ maxHeight: '30rem', maxWidth: '14rem' }}>
      <div  className="flex justify-center items-center" style={{ position: 'relative' }}>
        <img  src={`/images/${image}`} alt={title} width={230}  />
       
        {discount > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: 'green',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            -{discount}%
          </div>
        )}
      </div>
      <Card.Body className='text-center'>
      <Card.Text className='mb-2'>
          {renderStars()}
        </Card.Text>
        <Card.Title className='uppercase text-sm font-weight-bold'>{title}</Card.Title>
        {renderPrice()}
          
        
        
      </Card.Body>
    </Card>
  
    
    
  
  );
};

export default ProductCard;




