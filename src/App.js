import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import ShoesData from './Products/ShoesData'
import AddressInfo from './SignUp/AddressInfo'
import ThankYou from './SignUp/ThankYou'
import { CartProvider } from "./CartContext";
import Checkout from './Products/CheckOut'
import PersonalInfo from './SignUp/PersonalInfo'
import {useState , useEffect} from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import  './App.css'


const App = () => {
  const [loading,setLoading] =useState([false]);
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  } , 3000)

} ,[])
  return (
    <>
    <CartProvider>
    <BrowserRouter>
    {loading ? 
    <div className="loader">
    <CircleLoader color={'#5d0137'}  size={90} speedMultiplier={1} />
    </div>:
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/shoes' element={<ShoesData/>} />
    <Route path='/address' element={<AddressInfo/>} />
    <Route path='/thankyou' element={<ThankYou/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/personalinfo' element={<PersonalInfo/>} />
    </Routes> 
    }
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App