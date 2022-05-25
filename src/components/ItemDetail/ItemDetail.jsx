import React, { useState } from 'react'
import BuyBtns from '../BuyBtns/BuyBtns'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.scss"

function ItemDetail({prod}) {

  const [count, setCount] = useState(<ItemCount  prod={prod} initialStock={1} stock={prod.stock} onAdd={onAdd} />);

  function onAdd() {
    setCount(<BuyBtns/>)
  }

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
            </div>
            <p className='item-price'>Precio: ${prod.precio}</p>
            {count}
        </div>
    </div>
  )
}

export default ItemDetail