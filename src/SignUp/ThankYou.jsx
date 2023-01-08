import React , {useContext} from 'react'
import CartContext from "../CartContext";
import { Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

const ThankYou = () => {
    const { items   } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);
return (
    <>
    <NavBar/>
        <Container className='thank0'>
            <Row>
                <Col lg={12} md={12} sm={12} className='thank'>
                <h1>Thank you for your order</h1>
                <h4>Your order number is #2001539. We have emailed your order confirmation,
                and will send you an update when your order has shipped.</h4>
                <Link to='/' onClick={() => deleteAll(items.id)}><button>Go To Homepage</button></Link>
                </Col>
            </Row>
        </Container>
    <Footer/>
    </>
)
}

export default ThankYou