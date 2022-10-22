import React, { useState, useEffect } from 'react'
import logo from './../../assets/image/svg/logo.svg';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { IconContext} from 'react-icons';
import { FaAngleDown, FaUser, FaSearch, FaTimes} from 'react-icons/fa';
import { FcMenu} from 'react-icons/fc';
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu} from 'react-icons/ai';

import { BsBag} from 'react-icons/bs';
import { removeCart, removeFav} from "../../features/products" ;
import svgsearch from './../../assets/image/svg/search.svg'
import avater from './../../assets/image/svg/avatar.png';
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

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
  }
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => console.log("logged out"));
    dispatch({ type: "user/logout" })
    navigate("/login");
}


  const handleClick = () => {
   console.log("clicked")
   dispatch(openSidebar());
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

const displaySubmenu = (e) => {
  const text = e.target.textContent;
  const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right) / 2;
  const bottom = tempBtn.bottom + (window.scrollY + 3);
    dispatch(
      openSubmenu({text, center, bottom})
    );
  
};

const handleSubmenu = (e) => {
  if (!e.target.classList.contains('link-btn')) {
    dispatch(closeSubmenu());
  }
};

return (
    <>
<nav className='nav header-section' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
        </div>
        <ul>
        
        </ul>
       
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Home
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Pages
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Blog
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              About us
            </button>
          </li>
        </ul>
        
        <ul className="navbar-submenu-links">
              <li>   
                 <a onClick={handleClick} >
                 <BsBag size={25}/>
                 <span ><p>{carts.length}</p></span>
                 </a>   
                </li>
                <li>
                    <a  className="search" onClick={handleSearch} >
                    <IconContext.Provider value={{ size: "2rem"}}>
                      <AiOutlineSearch/>
                      </IconContext.Provider>
                    </a>
                </li>
                <li>
                    <a onClick={handleSidbar}>
                        <AiOutlineMenu size={25}/>
                    </a>
              </li>
              {
                                    !status ?
                                    <li className="loggedin">      
                                           <AiOutlineUser size={25}/>
                                        <ul className="auth_dropdown">
            
                                            <li><Link to="/login"> Login</Link></li>
                                            <li><Link to="/register"> Register</Link></li>
                                        </ul>
                                    </li>
                                        
                                        :
                                            <li className="loggedin"><img src={avater} alt="avater" />{user.username || 'Mubarek Sh'} <FaAngleDown size={10}/>
                                                <ul className="auth_dropdown">
                                                    <li><Link to="/my-account/auther-order"><i className="fa fa-cubes"></i> My Orders</Link></li>
                                                    <li><Link to="#!" onClick={() => { logout() }} ><i className="fa fa-sign-out"></i> Logout</Link></li>
                                                </ul>
                                            </li>
                                        
                                }
        </ul>

   </div>

   <div className={`${
        isSidebarOpen ? 'navbar-cart navbarshow' : 'navbar-cart'
      }`}>
{carts.map((data, index) => (
<div className={`${
        isSidebarOpen ? 'single singleshow' : 'single'
      }`}>
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
   
   <Link to={'/cart'}><button className='navButton'>View cart</button></Link>
   <button className='navButton'>Checkout</button>
   </div>
</nav>
</>
);
};

export default Navbar;