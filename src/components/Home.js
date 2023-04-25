import React from 'react';
import { FaBeer } from 'react-icons/fa';
import {Button,Container, Row,Col} from 'react-bootstrap';
import Leftbar from './child/Leftbar';
import Rightbar from './child/Rightbar'
import Centerbar from './child/Centerbar'
import "./assest/Home.css"

const Home = () => {
  return (
    <div>
        <Container fluid className='ho'>
        <Row>
            <Col className='lef col-3'>
                <Leftbar />    
            </Col>
            <Col className='cen col-6'>
                <Centerbar />    
            </Col>
            <Col className='rig col-3'>
                <Rightbar />    
            </Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default Home