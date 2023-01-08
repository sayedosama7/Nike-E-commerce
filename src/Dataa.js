import React, { useContext } from 'react'
import CartContext from './CartContext';
import { Button ,Card } from 'react-bootstrap'

function Shoes ({ image , title , price , quantity }) {
    const { addToCart } = useContext(CartContext);
  return (
    <>
    
    <Card>
        <Card.Img  src={image} />
        <Card.Body>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text className='price'>
        {price}
        </Card.Text>
        </Card.Body>
    </Card>
    <Button className="proud-footer" variant="primary" onClick={() => addToCart( image , title ,  price ,quantity)}>
            Add to Cart
            </Button>
    </>
  )
}

export default Shoes