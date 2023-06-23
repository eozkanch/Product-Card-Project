import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';


const CarouselPage = () => {
  const images = [
    '/images/screenshot1-2x.png',
    '/images/screenshot2-2x.png',
    '/images/screenshot3-2x.png',
    '/images/screenshot4-2x.png',
  ];

  return (
    <div className=" relative flex justify-center items-center">
      <div className="w-11/12 h-full ">
        <Image src="/images/iphone.png" width={550} height={100} alt="iPhone" />
      </div>
      <div className="absolute w-6/12 h-full top-6 right-20">
        <Carousel
          autoPlay={true}
          animation="fade"
          interval={3000}
          indicators={false}
          timeout={1000}
         
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="image" width={500} height={100} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;




