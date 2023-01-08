import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { Col, Container, Row ,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <NavBar/>

      <Col lg={12} md={12} sm={12}>
      <img className='homeImg' src="/images/nike2.jpg" alt="" />
      </Col>
      <Col className='hometext' lg={12} md={12} sm={12}>
        <h1>JUST DO IT</h1>
        <h4>Nike has been your companion in happiness, both big and <br/>
        small, for over 50 years. Our roots are firmly grounded in <br/>
        Pakistan and with its people.</h4>
      </Col>
      <Col className='Latest' lg={12} md={12} sm={12}>
      <hr className="line" /> &nbsp; &nbsp;        
      <span className='Latest_Designs'>Latest Designs</span>&nbsp; &nbsp;
      <hr className='line' /> 
      </Col>


  <Container className='latest_products' >
    <Row>
  <Col lg={3} md={6} sm={12}>
    <Link to='/shoes' style={{textDecoration:"none"}}>
    <Card className='latestImgs'>
      <Card.Img  src="/images/latest designs 1.jpg" />
      <Card.Body>
      <Card.Title className='title'>Flex Control 4</Card.Title>
        <Card.Text className='price'>
        $90
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col> 

    <Col lg={3} md={6} sm={12}>
    <Link to='/shoes' style={{textDecoration:"none"}}>
    <Card className='latestImgs'>
      <Card.Img  src="/images/latest designs 2.jpg" />
      <Card.Body>
      <Card.Title className='title'>Flex Control 4</Card.Title>
        <Card.Text className='price'>
        $90
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>   

    <Col lg={3} md={6} sm={12}>
    <Link to='/shoes' style={{textDecoration:"none"}}>
    <Card className='latestImgs'>
      <Card.Img  src="/images/latest designs 3.jpg" />
      <Card.Body>
      <Card.Title className='title'>Air Max Motion 2</Card.Title>
        <Card.Text className='price'>
        $80
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>    

    <Col lg={3} md={6} sm={12}>
    <Link to='/shoes' style={{textDecoration:"none"}}>
    <Card className='latestImgs'>
      <Card.Img  src="/images/latest designs 4.jpg" />
      <Card.Body>
      <Card.Title className='title'>Phantom GT Club DF</Card.Title>
        <Card.Text className='price'>
        $50
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    
    </Col> 
  </Row>
</Container>
<Footer/>

    </>
  )
}

export default Home