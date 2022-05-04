import React from "react";
import "@styles/MobileMenu.scss";


const MobileMenu = () => {
  return (
    <div className="mobile-menu">
         <div className="logo">
    </div>
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
  );
};

export default MobileMenu;
