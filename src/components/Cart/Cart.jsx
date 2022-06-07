import React from 'react'
import { useState } from "react";
import { useCartContext } from '../../context/cartContext';
import './Cart.scss';
import { Link } from 'react-router-dom'

function Cart() {
  
    const {cartList, vaciarCarrito} = useCartContext()


    
    return (
        <div className="cart">
            <h1>Cart</h1>
            {cartList == 0? <>
                <h2>No hay productos en el carrito</h2> 
                <Link to={"/"}>
                    <button>Back to Catalogue</button>
                </Link>
            </> 
             : 
            <>
            { cartList.map(product => <li>{product.nombre} - {product.cantidad}</li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>  
            </> 
        }
        </div>
    );
}

export default Cart