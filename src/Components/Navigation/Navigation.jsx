import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im';
import './Navigation.css';
import logo from '../../assets/logo.png';

const Navigation = () => {
  return (
   
      <Container className='nav-container'>
        <Navbar expand="lg">
          <Container fluid >
            <Navbar.Brand href="#home">
              <img className='nav-logo' src={logo} alt="logo image" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px', width: '65%', marginLeft: 'auto', marginRight: 'auto' }}
        navbarScroll>
                <Nav.Link href="#action1">Sell</Nav.Link>
                <Nav.Link href="#action2">Marketplace</Nav.Link>
                <Nav.Link href="#action2">Community</Nav.Link>
                <Nav.Link href="#action2">Develop</Nav.Link>
                <Nav.Link href="#action2">Resorces</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Nav.Link href="#action2" >Login</Nav.Link>

                <Button variant="outline-sucess" style={{ backgroundColor: '#7854F7', color: 'white' }} >Get Started</Button>
                <a href="#" style={{position: 'absolute', left:'100%',width:'100px' }}> <p><ImSearch /></p></a>

              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>


      </Container>
  )
}

export default Navigation