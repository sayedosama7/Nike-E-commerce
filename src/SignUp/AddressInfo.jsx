import React from 'react'
import {Link} from 'react-router-dom'
import {Col, Container, Row} from 'react-bootstrap'
import './SignUp.css'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const AddressInfo = () => {
return (
    <>
<NavBar/>
    <Container className='form0'>
    <Row>
    <Col lg={12} md={12} sm={12} className="form" >
        <form className='form' >
        <h2>Address Info</h2>
        <div className='all'>
        <div>
        <label> Country </label>
        </div>
        <div>
        <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label> City</label>
        </div>
        <div>
        <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label> State/Province/Region </label>
        </div>
        <div>
        <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label> Zip Code </label>
        </div>
        <div>
        <input type="text" name="user_name" required />
        </div>
        </div>
        <div className='all'>
        <div>
        <label> Address </label>
        </div>
        <div>
        <input type="text" name="user_name" required />
        </div>
        </div>
        <Link to='/thankyou'><button>Submit</button></Link>
        </form>
    </Col>
    </Row>
    </Container>

    <Footer/>
    </>
    
)
}

export default AddressInfo