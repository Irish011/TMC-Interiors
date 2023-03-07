import React from 'react';
import ResidentialPageConten from './res-page';

function Index() {
  return (
    <div>
          <div className='residential-page-title'>Residential</div>
          <div className='container  mt-3 residential-page-container'>
          Phasellus ut cursus justo. Phasellus eget tellus nec arcu volutpat faucibus vitae vitae neque. Nulla nunc quam, mattis in aliquam id, congue vitae sapien. Quisque non condimentum mauris, ut dictum ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dictum posuere eros in vehicula. Aliquam justo enim, rhoncus in vehicula non, ornare tempor nisl. In hac habitasse platea dictumst.
          </div>
          <div className='container  my-3 residential-page-container'>
          In mollis urna et nulla efficitur scelerisque. In in tellus et est malesuada ultrices. Ut dictum arcu tempor erat dapibus, sed egestas sapien imperdiet. Phasellus mauris quam, congue a ultricies a, ullamcorper ut arcu. In efficitur risus ac nulla condimentum dictum. Integer auctor lorem a mauris porttitor, a laoreet eros dapibus. Praesent consectetur risus sit amet suscipit tristique. Ut feugiat iaculis vestibulum. In quam enim, aliquam a sem nec, porta vehicula nisl. Suspendisse elementum vulputate malesuada.

          </div>
          <ResidentialPageConten />
    </div>
  )
}

export default Index;