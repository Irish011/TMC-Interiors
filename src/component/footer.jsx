import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaLinkedinIn} from 'react-icons/fa';

function Footer() {
  return (
    <div className='container'>
      <div className='footer-logo my-3'>TMC</div>
      <div className='footer-social-media row justify-content-center'>
        <div className='col-sm-1'>
         <FaInstagramSquare className='cursor-pointer'/>
        </div>
        <div className='col-sm-1'>
         <FaFacebookSquare className='cursor-pointer'/>
        </div>
        <div className='col-sm-1'>
         <FaTwitterSquare className='cursor-pointer'/>
        </div>
        <div className='col-sm-1'>
         <FaLinkedinIn className='cursor-pointer' />
        </div>
      </div>
      <div className='footer-copyright-text my-3'>Copyright © TMC & Associates. All Rights Reserved.</div>
    </div>
  )
}

export default Footer;