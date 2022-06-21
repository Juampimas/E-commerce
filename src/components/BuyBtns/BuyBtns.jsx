import React from 'react'

import { Link } from 'react-router-dom'

import "./BuyBtns.scss"

function BuyBtns() {
  return (
    <div className="flex-btns">
        <Link to="/cart">
            <button className='cart-btn btn'>Ir al Carrito</button>
        </Link>
        <Link to="/">
            <button className='back-btn btn'>Volver al Catálogo</button>
        </Link>
        
    </div>
  )
}

export default BuyBtns