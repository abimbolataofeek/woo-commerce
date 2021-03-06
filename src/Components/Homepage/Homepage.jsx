import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi';
import featured from '../../assets/featured.png';
import vector from '../../assets/vector.png'
import "./homepage.css";

const Homepage = () => {
  return (
    <>

      <div className="hero-container">
        <div>
          <p className='building-text'>Building exactly the eCommerce website you want.</p>


          <div>
            <p className='hero-text'>WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
              Get started quickly and make your way.</p>
          </div>

          <Container>
            <Row xs={2} md={4} lg={6}>
              <Col><button className='hero-button'>Start a New Store</button></Col>

              <div>
              <Col> <p className='btn-side-text'>or <span className='text-span'>Customize & Extend<FiChevronRight /> </span></p></Col>

              </div>
            </Row>

           

          </Container>

        </div>

        <div className='featured-image'>
          <img src={featured} alt="featured-image" />
        </div>
        
      </div>


    </>
  )
}

export default Homepage;




{/* <div className='btn-txt-container'>
<button className='hero-button'>Start a New Store</button>
<div >
  <p className='btn-side-text'>or <span>Customize & Extend<FiChevronRight /> </span></p>
</div>
</div> */}

