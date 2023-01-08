import React, { useContext } from "react";
import CartContext from "../CartContext";
import { Container, Row,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Shoes.css'
import CheckOutProducts from "./CheckOutProducts";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
function Checkout() {
const { items } = useContext(CartContext);
    return (
        <>
    <NavBar/>
        <section className="products">
            {items?.length === 0 ?(
                <>
                <div className='ifEmpty'>
                <h1>Your Cart is Empty</h1>
                <p>You have no items in your basket. To buy one or more items, click "Add To Cart" under to the item.</p>
                <Link className="back_to_products"   to='/shoes'><Button  >Back To Products</Button></Link>
                </div>
                </>)
                : (

                <div>
                <Container>
                <Row  className="products">
                <h1>Shopping Cart</h1>
                <CheckOutProducts />
                </Row>
                </Container>
                </div>
                )}
    </section>
    <Footer/>
    </>
);
}

export default Checkout;
