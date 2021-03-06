import React from 'react'

import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import swal from "sweetalert";

import './Cart.scss';


function Cart() {
  
    const {cartList, vaciarCarrito, eliminarProducto} = useCartContext()

    function precioTotal() {
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
        
        const db = getFirestore()
        const queryCollection = collection(db, "ordenes")
        addDoc(queryCollection, orden)
        .then(resp => swal({
            icon: 'success',
            title: '¡Se ha realizado su compra!',
            text: "ID de su compra: " + resp.id 
          }))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())   
    }

    return (
        <div className="cart">
            <h1>Carrito</h1>
            {cartList == 0
                ? <>
                <h2>No hay productos en el carrito</h2> 
                <Link to={"/"}>
                    <button className='btn'>Volver al Catálogo</button>
                </Link>
                </> 

                : <>
                { cartList.map(product =>
                <li key={product.id}>Producto: {product.nombre} <br/> Cantidad: {product.cantidad} <br/> Precio: ${product.precio * product.cantidad} 
                <button className='eliminar' onClick={() => eliminarProducto(product)}>Eliminar</button></li>
                )}
                <p>El precio total es: ${precioTotal()}</p>
                <button className='btn btn1' onClick={vaciarCarrito}>Vaciar Carrito</button>  
                <button className='btn btn2' onClick={generarOrden}>Realizar Compra</button>  
                </>
            }
        </div>
    );
}

export default Cart