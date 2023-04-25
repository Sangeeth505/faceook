import React from 'react'
import { Col,Row } from 'react-bootstrap'
import "../assest/rightbar/rightbar.css"

const Rightbar = () => {
  return (
    <>
      <div>
        <Row>
          <h6>Sponsored</h6>
        </Row>
        <Row>
          <Col >
            <img id='ima' alt="..." src={require("../image/ad1.png")} />
          </Col>
          <Col>
            <span className='loa'>
            Book a Site Visit Today
            <p className='pa'>navamibuilders.com</p></span>
          </Col>

        </Row>
        <Row>
          <Col >
            <img id='imb' alt="..." src={require("../image/ad2.png")} />
          </Col>
          <Col>
            <span className='loa'>
              World's First Dry Fruit Punch
            </span> 
          </Col>

        </Row>
        

      </div>


    </>
  )
}

export default Rightbar