import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi';
import "./commerce.css";
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import frame3 from '../../assets/frame3.png';

const Commerce = () => {
  return (
    <div >
      <Container className='commerce-container'>
        <div>
          <p className='eCommerce'>Your eCommerce made simple</p>
        </div>

        <div>
          <Row>
            <Col sm className='col-div-container'>
              <div>
                <img className='col-img' src={frame1} alt="featured-image" />

                <div>
                  <p className='col-header-text'>All You Need to Start</p>
                  <p className='col-p-text'>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                  <a className='col-a-link' href="#">Ecommerce for Wordpress<FiChevronRight /></a >
                </div>

              </div>
            </Col>

            <Col sm className='col-div-container'>
              <div>
                <img className='col-img' src={frame2} alt="featured-image" />
                <div>
                  <p className='col-header-text'>Customize and Extend</p>
                  <p className='col-p-text'>From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                  <a className='col-a-link' href="#">Browse Extentions<FiChevronRight /></a >
                </div>

              </div>
            </Col>


            <Col sm className='col-div-container' >
              <div>
                <img className='col-img' src={frame3} alt="featured-image" />
                <div>
                  <p className='col-header-text'>Active Community</p>
                  <p className='col-p-text'>WooCommerce is one of the fastest-growing eCommerce Communities.</p>
                  <a className='col-a-link' href="#">Check or Forums<FiChevronRight /></a >
                </div>

              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  )
}

export default Commerce