import React from 'react'
import logo from "../../img/Recurso 1.png"
import Carrito from "../CartWidget/CartWidget"
import "./Navbar.scss"

function Navbar() {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo e-commerce" />
        </div>
        <nav>
            <ul>
                
                    <li>Celulares</li>
                
                
                    <li>Tablets</li>
                
                
                    <li>Computadoras</li>
                
                
                    <li>Consolas</li>
                
            </ul>
        </nav>
        <Carrito />
    </header>
  )
}

export default Navbar