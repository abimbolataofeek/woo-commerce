import { Button } from 'bootstrap'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'

const Develop = () => {
  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col sm>
              <img src={frame4} alt="featured-image" />
            </Col>

            <Col sm>
              <p>Develop Without Limits</p>
              <p>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add
                a single product to a WordPress site—your store, your way.</p>
              <Button>Read the Documentation</Button>
            </Col>

          </Row>
        </div>
        <Row>
          <Col sm>
            <p>Develop Without Limits</p>
            <p>WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add
              a single product to a WordPress site—your store, your way.</p>
            <Button>Read the Documentation</Button>
          </Col>

          <Col sm>
            <img src={frame5} alt="featured-image" />
          </Col>



        </Row>
        <div>

        </div>

      </Container>
    </div>
  )
}

export default Develop;

// <Col sm> <div>
//               <img src={frame1} alt="featured-image" />

//               <div>
//                 <p>All You Need to Start</p>
//                 <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
//                 <a href="#">Ecommerce for Wordpress<FiChevronRight /></a >
//               </div>

//             </div></Col>