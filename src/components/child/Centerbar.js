import React from 'react';
import { Col, Container,Row,InputGroup,Form } from 'react-bootstrap';
import "../assest/centerbar/centerbar.css";
import { MdOutlineWebStories } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { MdVideoCall } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdInsertEmoticon } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Centerbar = () => {
  return (
    <div>
        <Container className='ca'>
          <Row>
            <Col>
              <div className='mr'>
                <span className='cwds'>
                <MdOutlineWebStories className='ciia' />
                Stories</span>
              </div>
              <hr  id='cia'/>
            </Col>
            <Col>
              <div className='mr'>
                <span className='cwd'>
                <BiMoviePlay className='caia'/>
                Reels</span>
              </div>
              <hr />
            </Col>
            <Col>
              <div className='mr'>
                <span className='cwd'>
                <MdVideoCall className='caia'/>
                Rooms</span>
              </div>
              <hr />
            </Col>

          </Row>
          <Row>
            <Col id='cca' >
            <img id='cpa' alt="..." src={require("../image/main1.jpg")} />
            <HiOutlinePlusSm id='dic' />
            <p id='paaa'>Create story</p>
            </Col>
            <Col>
            <img id='cpb' alt="..." src={require("../image/main2.webp")} />
            <p id='paab'>Shubham <br />Khatri</p>
            </Col>
            <Col>
            <img id='cpb' alt="..." src={require("../image/main3.jpg")} />
            <p id='paac'>Mayur Praksh</p>

            </Col>
            <Col>
            <img id='cpb' alt="..." src={require("../image/main4.jpg")} />
            <p id='paab'>Ramesh T S<br />Nair</p>

            </Col>

          </Row>


        </Container>
        <Container className='cb'>
          <InputGroup>
          <Row>
            <Col className='cdn col-3'>
              <img id='fo' alt="..." src={require("../image/main1.jpg")} />  
            </Col>
            <Col className='col-9'>
              <Form.Control
                className='csr'
                type="text"
                placeholder="What's on your mind, Ankit?"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"/>
            </Col>
          </Row>                            
          </InputGroup>
          <hr />
          <Row className='cll'>
            <Col className='col-4' id='qa'>
            <div>
              <span id='cps'>
                <RiLiveLine id='cpss'  />
                Live video
              </span>
            </div>
            
            </Col>
            <Col className='col-4' id='qb'>
            <div>
              <span id='cps'>
                <MdPhotoLibrary id='cpssa' />
                Photo/video
              </span>
            </div>
            
            </Col>
            <Col className='col-4' id='qc'>
            <div>
              <span id='cps'>
                <MdInsertEmoticon id='cpssb'  />
                Feeling/activity
              </span>
            </div>
            
            </Col>
          </Row>
        </Container>
        <Container className='cc'>
          <Row>
          <span>
            <img id='fo' alt="..." src={require("../image/main1.jpg")} />
            Dharmanshu Johar<p className='fa'></p>15hr</span><BiDotsHorizontalRounded /><AiOutlineClose />
          </Row>

        </Container>
    </div>
  )
}

export default Centerbar