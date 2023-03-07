import React from 'react';
import img1 from '../../img/site-img-1.jpg';
import img2 from '../../img/site-img-2.JPG';
import img3 from '../../img/site-img-3.jpg';
import img4 from '../../img/site-img-4.jpg';
import img5 from '../../img/site-img-5.jpg';
import img6 from '../../img/site-img-6.jpg';
import img7 from '../../img/site-img-7.jpg';
import img8 from '../../img/site-img-8.jpg';
import img9 from '../../img/site-img-9.jpg';

function ResidentialPageConten() {
  return (
    <div className='residential-img-container'>
          <div className='row m-2'>
        <img src={img1} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img2} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img3} className="img-thumbnail col-sm-4 p-0"></img>

        </div>
        <div className='row m-2'>
        <img src={img4} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img5} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img6} className="img-thumbnail col-sm-4 p-0"></img>

        </div>
        <div className='row m-2'>
        <img src={img7} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img8} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={img9} className="img-thumbnail col-sm-4 p-0"></img>

        </div>
    </div>
  )
}

export default ResidentialPageConten