import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import Shoes from './Shoes';

function ShoesData () {
    const products =[
        {
            id: 0,
            title: "Flex Experience Run 9",
            price:" $65.0",
            image:
            "/images/8.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 1,
            title: "Flex Control 4",
            price: "$65.0",
            image:
            "/images/2.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 2,
            title: "Air Max Motion 2",
            price: "$84.95",
            image:
            "/images/3.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 3,
            title: "Phantom GT Club DF FG/MG",
            price: "$65.0",
            image:
            "/images/4.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 4,
            title: "Revolution 5",
            price:" $60.0",
            image:
            "/images/5.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 5,
            title: "Air Zoom Pegasus 37",
            price: "$120.0",
            image:
            "/images/6.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 6,
            title: "Air Zoom UNVRS",
            price: "$160.0",
            image:
            "/images/7.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 7,
            title: "Precision IV",
            price: "$70.0",
            image:
            "/images/8.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 8,
            title: "Zoom Winflo 7",
            price: "$90.0",
            image:
            "/images/9.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 9,
            title: "Revolution 5 (Infant/Toddler)",
            price: "$45.0",
            image:
            "/images/10.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 10,
            title: "Free Metcon 3",
            price: "$120.0",
            image:
            "/images/11.jpg",
            quantity: 0,
            added: false,
        },
        {
            id: 11,
            title: "Flex Experience Run 9",
            price:" $65.0",
            image:
            "/images/1.jpg",
            quantity: 0,
            added: false,
        },
        ];

return (
    <section>
        <NavBar/>
        <Container>
            <Row>
            {products.map((product, index) => (
            <Col lg='4' md='6' sm='12' key={index} >
                <Shoes title={product.title} image={product.image} price={product.price} quantity={product.quantity} id={product.id} />
                </Col>   
                ))}
            </Row>
        </Container>
        <Footer />
    </section>
)
}

export default ShoesData