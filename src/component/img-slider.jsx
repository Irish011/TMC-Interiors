 import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImgSlider1 from '../img/home-slider-1.JPG';
import ImgSlider2 from '../img/home-slider-2.jpg';
import ImgSlider3 from '../img/home-slider-3.jpg';
import ImgSlider4 from '../img/home-slider-4.jpg';
import {useMediaQuery} from '@react-hook/media-query';

function ImgSlider() {

  const matches = useMediaQuery('only screen and (max-width: 991px)');
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={matches ?{ height: '100vh !important'} : { height: '90vh'}} >
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d-block w-100 home-carousel-item-img"
          src={ImgSlider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='slider-caption-text'>Lorem Ipsum is simply dummy text of the printing. combined with a handful of model sentence structures, to generate </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d-block w-100 home-carousel-item-img"
          src={ImgSlider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='slider-caption-text'>It is a long established fact that a reader will be distracted. therefore always free from repetition</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d-block w-100 home-carousel-item-img"
          src={ImgSlider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className='slider-caption-text'>There are many variations of passages of Lorem Ipsum available, </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='home-carousel-item'>
        <img
          className="d-block w-100 home-carousel-item-img"
          src={ImgSlider4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <div className='slider-caption-text'>Lorem Ipsum is simply dummy text of the printing. The first line of Lorem Ipsum</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ImgSlider;