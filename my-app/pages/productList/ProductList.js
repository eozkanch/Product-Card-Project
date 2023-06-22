// ProductList.js

import React from 'react';
import data from './data.json';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';


const ProductList = () => {
  return (
    
    <Container className='w-full h-full '>
      <Row>
   <Col  className='m-5'>
    
      <Container className="product-list flex justify-center items-center m-5">
      {data.map((product) => (
      
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          discount={product.discount}
          rate={product.rate}
        />
       
      ))}
    </Container>
    
    </Col>
    </Row>
    </Container>
  );
};

export default ProductList;

