import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import MobileMenu from "@components/MobileMenu.jsx";
import Menu from "@components/Menu.jsx";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/Logo.svg";
import shoppingCart from "@icons/icon_cart.svg";
import wishlist from "@icons/icon_heart.svg";
import search from "@icons/icon_search.svg";


const Header = () => {
  const [toggleDesktop, setToggleDesktop] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
 
  const handleClickDesktop = () => {
    setToggleDesktop(!toggleDesktop);
  };

  const handleClickMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  return (
    <nav>
      <div className="navbar-left">
        <a href="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a href="/">Nuestro Equipo</a>
          </li>
          <li>
            <a href="/">Portafolio</a>
          </li>
          <li>
            <a href="/">Contácto</a>
          </li>
          <li>
            <a href="/">Términos y condiciones</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <ul>
                   <li className="navbar-search">
            <img src={search} alt="search" />
          </li>

          <li className="navbar-wishlist">
            <img src={wishlist} alt="wish list" />
          </li>
          <li
            className="navbar-shopping-cart"
          >
            <img src={shoppingCart} alt="shopping cart" />
            {<div>1</div>}
          </li>
        </ul>        
        <img src={menu} alt="logo" className="menu" onClick={handleClickMobile} />

      </div>
     
      {toggleDesktop && <Menu />}
      {toggleMobile && <MobileMenu />}
      {toggleOrders && (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      )}


    </nav>
  );
};

export default Header;
