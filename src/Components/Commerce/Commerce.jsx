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
      <Container>
        <div>
          <p>Your eCommerce
            made simple</p>
        </div>

        <div>
          <Row>
            <Col sm> <div>
              <img src={frame1} alt="featured-image" />

              <div>
                <p>All You Need to Start</p>
                <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                <a href="#">Ecommerce for Wordpress<FiChevronRight /></a >
              </div>

            </div></Col>

            <Col sm> <div>
              <img src={frame2} alt="featured-image" />
              <div>
                <p>Customize and Extend</p>
                <p>From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.</p>
                <a href="#">Browse Extentions<FiChevronRight /></a >
              </div>

            </div></Col>
            <Col sm> <div>
              <img src={frame3} alt="featured-image" />
              <div>
                <p>Active Community</p>
                <p>WooCommerce is one of the fastest-growing eCommerce Communities.</p>
                <a href="#">Check or Forums<FiChevronRight /></a >
              </div>

            </div></Col>
          </Row>
        </div>

      </Container>
    </div>
  )
}

export default Commerce