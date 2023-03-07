import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImgSlider1 from '../img/home-slider-1.JPG';
import ImgSlider2 from '../img/home-slider-2.jpg';
import ImgSlider3 from '../img/home-slider-3.jpg';
import ImgSlider4 from '../img/home-slider-4.jpg';
import { RiDoubleQuotesR } from 'react-icons/ri';

function Testimonial() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  return (
    <div>
      <hr className='my-4' />
      <div className='home-about-title text-center'>Testimonials</div>
      <div className='row justify-content-around m-4'>

        <div className='container col-sm-10 home-testimonial-container py-4 px-5'>
          <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '40vh' }}>
            <Carousel.Item className='home-carousel-item'>
              <Carousel.Caption>
                <div className='container home-testimonial-container-inner'>
                  <div className='row justify-content-start my-3'>
                    <img
                      className="d-block w-100 home-testimonial-img col-sm-5"
                      src={ImgSlider1}
                      alt="First slide"
                    />
                    <div className='col-sm-3 text-black'>Kimberly E. Walker
                    </div>
                  </div>
                    <RiDoubleQuotesR className='home-testimonial-double-qoutes'/>
                  <div className='slider-caption-text-testimonial'>" only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "</div>
                  <div className='slider-caption-text-testimonial'>"In the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='home-carousel-item'>
              <Carousel.Caption>
                <div className='container home-testimonial-container-inner'>
                  <div className='row text-left justify-content-start my-3'>
                    <img
                      className="d-block w-100 home-testimonial-img col-sm-5"
                      src={ImgSlider2}
                      alt="First slide"
                    />
                    <div className='col-sm-3 text-black'>William R. Bates
                    </div>
                  </div>
                    <RiDoubleQuotesR className='home-testimonial-double-qoutes'/>
                  <div className='slider-caption-text-testimonial'>"  look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "</div>
                  <div className='slider-caption-text-testimonial'>"And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='home-carousel-item'>
              <Carousel.Caption>
                <div className='container home-testimonial-container-inner'>
                <div className='row text-left justify-content-start my-3'>
                  <img
                    className="d-block w-100 home-testimonial-img col-sm-5"
                    src={ImgSlider3}
                    alt="First slide"
                  />
                  <div className='col-sm-3 text-black'>Howard A. Brown
                  </div>
                </div>
                    <RiDoubleQuotesR className='home-testimonial-double-qoutes'/>
                <div className='slider-caption-text-testimonial'>" tortor, faucibus eget justo sit amet, viverra fermentum nunc. Etiam at lacus dictum, venenatis libero sit amet, interdum lacus. Sed non metus purus. Morbi tellus diam, finibus in dictum ut, sodales sed erat. Phasellus cursus ac elit in suscipit. Nullam metus risus, eleifend et semper sit amet, scelerisque non felis. Ut laoreet "</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='home-carousel-item'>
              <Carousel.Caption>
                <div className='container home-testimonial-container-inner'>
              <div className='row text-left justify-content-start my-3'>
                <img
                  className="d-block w-100 home-testimonial-img col-sm-5"
                  src={ImgSlider4}
                  alt="First slide"
                />
                <div className='col-sm-3 text-black'>Willie E. Vargas
                </div>
              </div>
                    <RiDoubleQuotesR className='home-testimonial-double-qoutes'/>
                <div className='slider-caption-text-testimonial'>" in nisl sit amet neque faucibus dictum eu ac mauris. Aliquam id mauris vitae diam semper commodo ac sed nisl. Praesent pharetra lectus a malesuada volutpat. In hac habitasse platea dictumst. Fusce id urna vitae velit ultrices luctus at quis ex. Aliquam efficitur sed libero eget facilisis. "</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;