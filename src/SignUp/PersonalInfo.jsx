import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Container , Row} from 'react-bootstrap'
import './SignUp.css'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const SignUp = () => {
  return (
    <>
      <NavBar/>

  <Container className='form0'>
  <Row>
  <Col lg={12} md={12} sm={12} className="form" >
        <form className='form' >
        <h2>Personal Info</h2>
        <div className='all'>
        <div>
        <label> First Name </label>
        </div>
        <div>
          <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label> Last Name </label>
        </div>
        <div>
          <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label>Email or mobile phone number</label>
        </div>
        <div>
          <input type="email" name="user_email" required />
        </div>
        </div>
        <Link to='/address'><button>Submit</button></Link>
      </form>
  </Col>
  </Row>
  </Container>
  
    <Footer/>
    </>
  )
}

export default SignUp