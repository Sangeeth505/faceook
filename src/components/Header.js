import React from 'react';
import { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { BsMessenger} from "react-icons/bs";
import{ FaBell } from "react-icons/fa";
import { Button,Navbar,Nav,Container,Row,Col,Form,InputGroup } from 'react-bootstrap';
import "./assest/Header.css"



const Header = () => {

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
    <div>
      <header className="App-header">
        <Container fluid>
            <Row>
                <Navbar className='top' cexpand="lg" variant="light" bg="light">
                   <Col className='fir col-3'>
                   <img className='log_im' alt="..." src={require("./log/Facebook-Logo.png")} />
                   </Col>
                   <Col className='sec col-5'>
                       <InputGroup>
                            <InputGroup.Text id="btnGroupAddon2">
                                < BsSearch  />
                            </InputGroup.Text>
                            <Form.Control
                                className='ser'
                                type="text"
                                placeholder="Search Facebook"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon2"
                            />
                        </InputGroup>
                   </Col>
                   <Col className='col-3'>
                    <div>
                    <img id='pic' src={data} alt="Ankit"/>
                    <FaBell id='icb' />
                    <BsMessenger id='ica' />
                    
                    {/* {data} */}
                    
                    
                    </div>
                   
                   </Col>
            
                </Navbar>
            </Row>
           <Navbar.Brand href="#">
           
           </Navbar.Brand>
        </Container>
          
        
     
      </header>
    </div>
  )
}

export default Header