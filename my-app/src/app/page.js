'use client'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button } from 'react-bootstrap';


export default function Home() {
  return (
    
    <Container fluid className='flex-col justify-center items-center p-20 bg-orange-300 h-screen w-screen'>
    <h1 className='text-center text-blue-400'> WELCOME HOME PAGE </h1>

    <Container className='flex justify-center items-center gap-10 mt-10'>
    <Button variant="primary" href="/productList">Product list</Button>
    

    </Container>
    </Container>
  )
}
