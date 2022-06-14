import React from 'react'
import { useState } from "react";
import { useCartContext } from '../../context/cartContext';
import './Cart.scss';
import { Link } from 'react-router-dom'
import { addDoc, collection, doc, getFirestore } from 'firebase/firestore';

function Cart() {
  
    const {cartList, vaciarCarrito} = useCartContext()

    const precioTotal = () => {
        const sum = cartList.reduce((acumulador, objeto) => {
          return acumulador + objeto.precio * objeto.cantidad;
        }, 0);
        return sum;
      };

    function generarOrden() {
        let orden = {}

        orden.comprador = {nombre: "Juan Pablo", email: "juampim98@gmail.com", tel: 1564775750}

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.cantidad

            return {id, nombre, precio}
        })

        orden.total = precioTotal()

        console.log(orden)

        const db = getFirestore()
        const queryCollection = collection(db, "ordenes")
        addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }

    
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
            <button onClick={generarOrden}>Realizar Compra</button>  
            </> 
        }
        </div>
    );
}

export default Cart