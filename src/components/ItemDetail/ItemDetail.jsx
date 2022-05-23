import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.scss"

function ItemDetail({prod}) {

  return (
    <div className='ItemDetail'>
        <div className="itemDetail-img">
            <img src={prod.img} alt="" />
        </div>
        <div className="ItemDetail-text">
            <h2>{prod.nombre}</h2>
            <p className='item-desc'>{prod.desc}</p>
            <div className="itemDetail-stock">
                <p className='item-stock'>Stock: {prod.stock}</p>
                <ItemCount prod={prod} initialStock={1} stock={prod.stock} />
            </div>
            <p className='item-price'>Precio: ${prod.precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail