import React, { useState, useEffect } from 'react'
import logo from './../../assets/image/svg/logo.svg';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { FaUser, FaSearch, FaTimes} from 'react-icons/fa';
import { FcMenu} from 'react-icons/fc';
import { BiShoppingBag} from 'react-icons/bi';
import { removeCart, removeFav} from "../../features/products" ;
import svgsearch from './../../assets/image/svg/search.svg'
import avater from './../../assets/image/svg/search.svg'
import { useDispatch, useSelector } from "react-redux";
import { openSidebar, openSubmenu, closeSubmenu } from "../../features/navSettings";



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [width, setDimensions] = useState(window.innerWidth)
  const navigate = useNavigate()
  const carts = useSelector((state) => state.products.carts);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user.user);

  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);


  const logout = () => {
    dispatch({ type: "user/logout" })
    navigate("/login");
}


  const handleClick = () => {
   console.log("clicked")
}


const handleSearch = () => {
    console.log("clicked")
}

const handleSidbar = () => {
    dispatch(openSidebar({type: 'settings/openSidebar', payload: true}));
}

const removeFromCart = (id) => {
    dispatch(removeCart({id}));
}

return (
    <>
<nav className='nav header-section' >
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
        </div>
      
        <ul className='nav-links'>
          <li>
            <button className='link-btn' >
              Home
            </button>
          </li>
          <li>
            <button className='link-btn' >
              Pages
            </button>
          </li>
          <li>
            <button className='link-btn' >
              Blog
            </button>
          </li>
          <li>
            <button className='link-btn' >
              About us
            </button>
          </li>
        </ul>
        
        <ul className="navbar-submenu-links">
              <li>   
                 <a  onClick={handleClick}><BiShoppingBag size={30}/><span >{carts.length}</span></a>   
                </li>
                <li>
                    <a  className="search" onClick={handleSearch} >
                      <FaSearch size={30}/>
                    </a>
                </li>
                <li>
                    <a onClick={handleSidbar}>
                        <FcMenu size={30}/>
                    </a>
              </li>
              {
                                    !status ?
                                    <li className="after_login">      
                                           <FaUser size={30}/>
                                        <ul className="auth_dropdown">
            
                                            <li><Link to="/login"> Login</Link></li>
                                            <li><Link to="/register"> Register</Link></li>
                                        </ul>
                                    </li>
                                        
                                        :
                                            <li className="after_login"><img src={avater} alt="avater" /> {user.name || 'Mubarek Sh'} <i className="fa fa-angle-down"></i>
                                                <ul className="auth_dropdown">
                                                    <li><Link to="/my-account/auther-order"><i className="fa fa-cubes"></i> My Orders</Link></li>
                                                    <li><Link to="#!" onClick={() => { logout() }} ><i className="fa fa-sign-out"></i> Logout</Link></li>
                                                </ul>
                                            </li>
                                        
                                }
        </ul>

   </div>

   <div className={`${
        isSidebarOpen ? 'navbar-cart navshow' : 'navbar-cart'
      }`}>
{carts.map((data, index) => (
<div className="single">
<div className="image">
<img className='im' src={data.img} alt="img"/>
</div>
<div className="title">
<h5>{data.title}</h5>
</div>
<div className="price">
<h5>{data.quantity || 1} x ${data.price}</h5>
</div>
   <div className="delete">
   <a href="#!" className="navbar-delete" onClick={() => removeFromCart(data.id)}><FaTimes /></a> 
</div>

   </div>
   ))}
   </div>
</nav>
</>
);
};

export default Navbar;