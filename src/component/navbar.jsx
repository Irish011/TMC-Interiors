import React from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import {useMediaQuery} from '@react-hook/media-query';
import { FaAnkh } from 'react-icons/fa';

function SiteNavbar() {
  const matches = useMediaQuery('only screen and (max-width: 991px)');
  return (
    <div className='app-navbar'>
      {/* small screen */}
     { matches ? <Navbar expand="lg" style={{height: '80px', textTransform:'uppercase',top: 0,
    width: '100%',
    backgroundColor: 'rgb(44, 49, 52)',
    position: 'fixed',
    zIndex: '100',}}>
      <Container>
        <Navbar.Brand href="/" className='text-white'>That's My Craft</Navbar.Brand>
        <NavDropdown.Divider></NavDropdown.Divider>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center site-navbar-small'  style={{ position: 'absolute',
  top: '80px',
  left:' 0 ',
  background: 'rgb(44, 49, 52)',
  minHeight: '100vh',
  width: '30%'}}>
          <Nav className="ml-auto justify-content-between" style={{width: '20%',padding: '20px'}}>
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#about" className='text-white'>About</Nav.Link>
            <NavDropdown title="Project" id="basic-nav-dropdown" className='navbar-primary-color'>
              <NavDropdown.Item href="/residential">Residencial</NavDropdown.Item>
              <NavDropdown.Item href="#commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item href="#detail">Details</NavDropdown.Item>
              <NavDropdown.Item href="#upcoming">Upcoming</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recongnitious" id="basic-nav-dropdown" className='navbar-primary-color'>
              <NavDropdown.Item href="#award-honours">Award & Honours</NavDropdown.Item>
              <NavDropdown.Item href="#media">Media</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> :
// big screen
<Navbar expand="lg" style={{height: '80px',backgroundColor:'#1d1c1c',textTransform:'uppercase',top: 0,
height: '80px',
width: '100%',
fontFamily:"Bungee inline", fontSize: '23px',
backgroundColor: 'rgb(44, 49, 52)',
textTransform: 'uppercase',
position: 'fixed',
zIndex: '100'}}>
  <Container>
    <Navbar.Brand href="/" className='text-white' style={{ fontSize: '28px'}}>That's My Craft</Navbar.Brand>
    <NavDropdown.Divider></NavDropdown.Divider> <div className="vl"></div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
      <Nav className="ml-auto justify-content-between" style={{ justifyContent:'space-between'}}>
        <Nav.Link href="/" className='text-white' id="navBtn">Home</Nav.Link>
        <Nav.Link href="#about" className='text-white' id="navBtn">About</Nav.Link>
        <NavDropdown title="Project" id="basic-nav-dropdown" className='navbar-primary-color'>
          <NavDropdown.Item href="/residential">Residencial</NavDropdown.Item>
          <NavDropdown.Item href="#commercial">Commercial</NavDropdown.Item>
          <NavDropdown.Item href="#detail">Details</NavDropdown.Item>
          <NavDropdown.Item href="#upcoming">Upcoming</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Recongnitious" id="basic-nav-dropdown" className='navbar-primary-color'>
          <NavDropdown.Item href="#award-honours">Award & Honours</NavDropdown.Item>
          <NavDropdown.Item href="#media">Media</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    }
      </div>
  )
}

export default SiteNavbar;