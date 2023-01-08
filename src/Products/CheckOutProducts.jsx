import React, { useContext }  from 'react'
import CartContext from "../CartContext";
import {Link} from 'react-router-dom'
import {Button , Col} from "react-bootstrap";
import './Shoes.css'
const CheckOutProducts = () => {
    const { items   } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);

  return (
    <>
        {items.map((item) => (
            <Col  key={item.id} lg="12" md="12" sm="12">
            <div className='CheckOutProducts'>
                <div>
                <img className='CheckOutProducts_img' src={item.image} alt=""/>
                </div>
                <div className='CheckOutProducts_info'>
                <p className='CheckOutProducts_title'>{item.title}</p> 
                <p className='CheckOutProducts_price'>{item.price}</p> 
                
                </div>
            </div>
            </Col>
        ))}
        <div className='buttons' >
                <Link className='empty_cart'><Button onClick={() => deleteAll(items.id)}>Empty Cart</Button></Link></div>
                <Link  className='Proceed' to='/personalinfo'> <Button >Proceed to Checkout</Button></Link>

    </>
  )
}

export default CheckOutProducts