/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { ImSearch } from 'react-icons/im'
import './Navigation.css';
import logo from '../../assets/logo.png'

const Navigation = () => {
  return (
    <div>
      <div>
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px' }}
              navbarScroll

            >
              <Nav.Link href="#action1">Sell</Nav.Link>
              <Nav.Link href="#action2">Marketplace</Nav.Link>
              <Nav.Link href="#action2">Community</Nav.Link>
              <Nav.Link href="#action2">Develop</Nav.Link>
              <Nav.Link href="#action2">Resorces</Nav.Link>

              

            </Nav>
            <Form className="d-flex">
            <Nav.Link href="#action2" >Login</Nav.Link>

              <Button variant="outline-sucess" style={{backgroundColor: '#7854F7', color: 'white'}} >Get Started</Button>
              <a href="#" style={{left: '96.3%', right: '2.86%', top: '0.89%', bottom:'98.84%' }}> <p><ImSearch /></p></a>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      </div>
     
    </div>
  )
}

export default Navigation