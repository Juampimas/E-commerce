import React from 'react'
import { Link } from 'react-router-dom'
import Carrito from "../CartWidget/CartWidget"
import "./Navbar.scss"

function Navbar() {
  return (
    <header>
        <div className="logo">
            <Link to={"/"}>
                <img src="/img/Recurso 1.png" alt="logo e-commerce" />
            </Link>
        </div>
        <nav>
            <ul>
                <Link to={`/category/celulares`}>
                    <li>Celulares</li>
                </Link>
                <Link to={`/category/tablets`}>
                    <li>Tablets</li>
                </Link>
                <Link to={`/category/computadoras`}>
                    <li>Computadoras</li>
                </Link>
                <Link to={`/category/consolas`}>
                    <li>Consolas</li>
                </Link>
            </ul>
        </nav>
        <Link to= "/cart">
            <Carrito />
        </Link>
    </header>
  )
}

export default Navbar