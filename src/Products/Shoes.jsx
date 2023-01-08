import React, { useContext } from 'react'
import CartContext from '../CartContext';
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Shoes.css'

function Shoes ({ image , title , price , quantity }) {
    const { addToCart } = useContext(CartContext);
  return (
    <>
    <div className='products_img'>
    <Card >
    <Card.Body>
        <Card.Title className='products_title' >{title}</Card.Title>
        <Card.Text className='products_price' >{price}</Card.Text>
        </Card.Body>
        <Card.Img  src={image} />

       <Link> <i className="fa-sharp fa-solid fa-cart-plus" onClick={() => addToCart( image , title ,  price ,quantity)}></i></Link>
        
    </Card>

            </div>
    </>
  )
}

export default Shoes