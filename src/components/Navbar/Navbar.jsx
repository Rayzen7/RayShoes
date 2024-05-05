import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Content/ShopContext';
import nav_dropdown from '../assets/dropdown_icon.png'
import logo_shoes from '../assets/Logo_shoes.png'

export const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e)=> {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo_shoes} alt=''/>
            <p>RayShoes</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none',color:'#000',fontWeight:'600'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none',color:'#000',fontWeight:'600'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none',color:'#000',fontWeight:'600'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none',color:'#000',fontWeight:'600'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none',color:'#000',fontWeight:'600'}} to='/kids'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar