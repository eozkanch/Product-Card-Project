import React, { useState, useEffect } from 'react';
import data from './data.json';
import ProductCard from './ProductCard';
import { Col, Container, Row, Form } from 'react-bootstrap';

const ProductList = () => {
  const [filterType, setFilterType] = useState('title');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterAndSortData();
  }, [filterType]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterType(selectedFilter);
  };

  const filterAndSortData = () => {
    let updatedData = [...data];

    switch (filterType) {
      case 'price-desc':
        updatedData.sort((a, b) => b.price - a.price);
        break;
      case 'price-asc':
        updatedData.sort((a, b) => a.price - b.price);
        break;
      case 'discount-desc':
        updatedData.sort((a, b) => b.discount - a.discount);
        break;
      case 'discount-asc':
        updatedData.sort((a, b) => a.discount - b.discount);
        break;
      default:
        break;
    }

    setFilteredData(updatedData);
  };

  return (
    <Container fluid className='p-10 bg-orange-200'>
      <Row>
        <Col lg={3} className='p-4 d-none d-lg-block'>
          <Form.Group controlId="filterForm">
            <Form.Label>Filter Type</Form.Label>
            <Form.Control as="select" value={filterType} onChange={handleFilterChange}>
              <option value="title">Title</option>
              <option value="price-asc">Price - Lowest to Highest</option>
              <option value="price-desc">Price - Highest to Lowest</option>
              <option value="discount-asc">Discount - Lowest to Highest</option>
              <option value="discount-desc">Discount - Highest to Lowest</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Row xs={1} sm={2} md={3} lg={4}>
            {filteredData.map((product) => (
              <Col key={product.id} className='p-4'>
                <ProductCard
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  discount={product.discount}
                  rate={product.rate}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;






