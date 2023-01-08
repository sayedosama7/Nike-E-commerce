import React from 'react'
import { Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
return (
    <>
        <Col className='footer'>
        <h1>Developer: <span >Sayed Osama</span></h1>
        <div className='icons'>
            <a href='https://web.facebook.com/profile.php?id=100074154131174' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href='https://www.linkedin.com/in/sayed-osama-a20a82253/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='https://web.facebook.com/profile.php?id=100074154131174' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href='https://github.com/sayedosama7' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        </div>
        <h6>Copyright © Nike Shoes</h6>
        </Col>
    </>
)
}

export default Footer