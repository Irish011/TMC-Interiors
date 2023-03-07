import React from 'react';
import logo1 from '../../img/logo-1.png';
import ResidencialImg from '../../img/residential.jpg';
import CommercialImg from '../../img/commercial.jpg';
import UpCommingImg from '../../img/upcoming.jpg';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
        <div className='home-about-title text center'>About</div>
        <div className='row justify-content-around m-4'>
            <div className=' col-sm-6'>

        <p className='container home-about-text'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <Button type="button" className='read-more-button'>Read More</Button>
            </div>
        <div className='col-sm-3'>
        <img src={logo1} className="img-thumbnail"></img>
        </div>
        </div>

          <div>
        <div className='row m-2 home-about-img-container'>
        <div className='row home-img-overlap-container'>
          <Link to='/' className='col-sm-4 home-img-overlap-text'>Commercial</Link>
          <Link to='/residential' className='col-sm-4 home-img-overlap-text'>Residential</Link>
          <Link to='/' className='col-sm-4 home-img-overlap-text'>Details</Link>
          </div>
        <img src={ResidencialImg} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={CommercialImg} className="img-thumbnail col-sm-4 p-0"></img>
        <img src={UpCommingImg} className="img-thumbnail col-sm-4 p-0"></img>
        </div>

          </div>

        <div className='home-about-title text center'>Why Us</div>
        <div className='row justify-content-around m-4'>
            <div className=' col-sm-6'>

        <p className='container home-why-text'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
        </div>
        </div>

    </div>
  )
}

export default About;