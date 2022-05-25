import React from 'react'
import { Link } from 'react-router-dom'
import "./BuyBtns.scss"

function BuyBtns() {
  return (
    <div className="flex-btns">
        <Link to="/cart">
            <button className='cart-btn btn'>Go to Cart</button>
        </Link>
        <Link to="/">
            <button className='back-btn btn'>Back to Catalogue</button>
        </Link>
        
    </div>
  )
}

export default BuyBtns