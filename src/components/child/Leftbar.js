import React from 'react'
// import { Container, Row,Col, } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { AiFillHome } from "react-icons/ai";
import { BsFillDisplayFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { MdGroups2} from "react-icons/md";
import { TbLetterA } from "react-icons/tb";
import "../assest/leftbar/leftbar.css"


const Leftbar = () => {

  const [data, setData] = useState();


  useEffect(() => {
    const getImage = async () => {
      const url = `https://picsum.photos/50`;
      //console.log(url)
      const response = await fetch(url);
      //console.log(response)
      //const newImage = await response.json();
      console.log(response)
      setData(response.url);
    };
    getImage().catch((error) => console.log(getImage()));
  }, []);



  return (
    <>
      <div>
        <span className='word'>
          <AiFillHome className='text-primary' id='la'/>
          Home
        </span>
        
      </div>
      <div>
        <span className='word'>
          <img className='lb' src={data} alt="Ankit"/>
          Ankit Yadav</span>
      </div>
      <hr />
      <div>
        <span className='word' >
          <BsFillDisplayFill className='text-primary' id='lc'/>
          Watch
        </span>
        
      </div>
      <div>
        <span className='word'>
          <CgMenuGridR id='ld'/>
          See All</span>
      </div>
      <hr />
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/car.jpg")} />
          Car Pool Alwar - Delhi - Jaipur
        </span>
        
      </div>
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/NASA.jpg")} />
          NASA - National Aeronautics a...</span>
      </div>
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/real.jpeg")} />
          Bangalore Real Estate
        </span>
        
      </div>
      <div className='mrg'>
        <span className='word'>
          <MdGroups2  id='le'/>
          See All Groups</span>
      </div>
      <hr />
      <div className='mrg'>
        <span className='word'>
          <TbLetterA  id='lf'/>
          Ankit Rai Gautam
        </span>
        
      </div>
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/angry.png")} />
          Angry Birds Friends</span>
      </div>
      <div className='mrg'>
        <span className='word' >
          <img className='lb' alt="..." src={require("../image/backgammon.jpg")} />
          Backgammon Live
        </span>
        
      </div>
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/candy.png")} />
          Candy Crush Saga</span>
      </div>
      <div className='mrg'>
        <span className='word'>
          <img className='lb' alt="..." src={require("../image/capitalist-yard.webp")} />
          Capitalist Yard India Pvt Ltd</span>
      </div>
    
    </>
  )
}

export default Leftbar