import React from 'react';
import { Button } from 'bootstrap';
import { Col, Container, Row } from 'react-bootstrap'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'
import "./develop.css";

const Develop = () => {
  return (
    <div>
      <Container className='dev-section'>
        <div>
          <Row>
            <Col sm>
              <img className='img1-container' src={frame4} alt="featured-image" />
            </Col>

            <Col sm>
              <p className='col1-header-text'>Develop Without Limits</p>
              <p className='col1-p-text'>WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any service.
                Design a complex store from scratch, extend a store for a client, or simply add
                a single product to a WordPress site your store, your way.</p>
              <button className='buttons-container'>Read the Documentation</button>
              
            </Col>

          </Row>
        </div>

        <div className='col2-container'>
          <Row>

            <Col sm >
              <p className='col2-header-text'>Know our Global Community</p>

              <p className='col2-p-text'>WooCommerce is one of the fastest-growing eCommerce communities.
                We’re proud that the helpfulness of the community and a wealth of
                online resources are frequently cited as reasons our users love it.
                There are 80+ meetups worldwide!</p>
              <button className='buttons-container'>Read the Documentation</button>
            </Col>
            <Col sm>
              <img className='img2-container' src={frame5} alt="featured-image" />
            </Col>



          </Row>
        </div>


      </Container>
    </div>
  )
}

export default Develop;