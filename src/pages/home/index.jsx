import React from 'react';
import ImgSlider from '../../component/img-slider';
import Testimonial from '../../component/testimonial';
import About from './about';

function HomePage() {
  return (
    <div>
      <ImgSlider/>
      <About />
      <Testimonial/>
    </div>
  )
}

export default HomePage;