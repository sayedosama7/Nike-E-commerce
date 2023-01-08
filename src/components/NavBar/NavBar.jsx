import React, { useContext }from 'react';
import { Link } from 'react-router-dom';
import { Navbar , Nav  } from 'react-bootstrap';
import CartContext from "../../CartContext";

import './NavBar.css'
const NavBar = () => {
      const { items } = useContext(CartContext);

return (
    <>
            <Link style={{textDecoration:"none"}}><h1 className='logoName'>Nike Shoes</h1></Link>
            <Navbar className='header' expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav">
            <div>
            <Link to="/"> <img className='nav_img' src='/images/nike logo.png' alt=''/></Link>
            </div>
            <Nav className='nav'>
            <div >
            <Link to="/" className='navOption'>Home</Link>
            </div>
            <div >
                <Link to="/about" className='navOption'>About</Link>
            </div>
            <div >
            <Link to="/shoes" className='navOption'>Products</Link>
            </div>
            
            <div className='cartOption'>
                <Link to='/Checkout' className='cartOptionOne'>
                <i className="fa-solid fa-cart-shopping"></i>  
                </Link>
                <Link to='/Checkout' className='cartCount'>{items.length}</Link>
            </div>
            </Nav>
            </Navbar.Collapse>      
    </Navbar>
    
    
    </>
)
}

export default NavBar