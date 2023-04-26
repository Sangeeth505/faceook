import React from 'react';
import { Col,Row } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { TbLetterA } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { VscMegaphone } from "react-icons/vsc";
import { AiOutlineUserSwitch } from "react-icons/ai";
import "../assest/rightbar/rightbar.css";

const Rightbar = () => {
  return (
    <>
      <div>
        <Row>
          <h6>Sponsored</h6>
        </Row>
        <Row>
          <Col className='rig col-5' >
            <img id='ima' alt="..." src={require("../image/ad1.png")} />
          </Col>
          <Col className='riga col-7'>
            <span className='loa'>
            Book a Site Visit Today
            <p className='pa'>navamibuilders.com</p></span>
          </Col>

        </Row>
        <Row>
          <Col className='rig col-5' >
            <img id='imb' alt="..." src={require("../image/ad2.png")} />
          </Col>
          <Col className='riga col-7'>
            <span className='loa'>
              World's First Dry Fruit Punch
            <p className='pa'>meltinghearts.co</p></span> 
          </Col>

        </Row>
        <Row>
          <h6 id='ha'>Your Pages and Profiles <BiDotsHorizontalRounded id='iaa' /></h6>         
        </Row>
        <div className='mrga'>
          <span className='word'>
            <TbLetterA id='ls'/>
            Ankit Rai Gautam
          </span>
        
        </div>
        <div className='mrgb'>
          <p className='lsa'>
          <MdNotificationsNone className='icl'/>
          3 Notifications
          </p>

        </div>
        <div className='mrgb'>
          <p className='lsa'>
          <AiOutlineUserSwitch className='icl'/>
          Switch into Page
          </p>

        </div>
        <div className='mrgb'>
          <p className='lsa'>
          <VscMegaphone className='icl'/>
          Create promotion
          </p>

        </div>
        <Row>
          <h6 id='hb'>Friend requests<p id='iab'>See all</p></h6>         
        </Row>
        <Row>
          <Col className='fri col-3' >
            <img id='f' alt="..." src={require("../image/pic1.jfif")} />
          </Col>
          <Col className='frie col-9'>
            <span className='fab'>
            Harsh Yadav
            <p className='fa'>
            <img id='fb' alt="..." src={require("../image/pic2.jpg")} />
            <img id='fb' alt="..." src={require("../image/pic3.webp")} />
            4 mutual friends</p></span>
          </Col>

        </Row>
        
        

      </div>


    </>
  )
}

export default Rightbar