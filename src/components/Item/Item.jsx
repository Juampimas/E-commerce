import { Link } from 'react-router-dom'
import React from 'react'
import Carrito from '../CartWidget/CartWidget'
import "./Item.scss"

function Item(prod) {
  return (
    <div className="item-container">
        <h1>{prod.nombre}</h1>
        <div className="item-img">
            <img src={prod.img} alt="" />
        </div>
        <p>Precio: ${prod.precio}</p>
        <Link to={`/itemDetail/${prod.id}`}>
            <button className='item-detail'>Detalles del Producto</button>
        </Link>
    </div>
  )
}

export default Item