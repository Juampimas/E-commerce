import { prettyDOM } from '@testing-library/react'
import React from 'react'
import Item from '../Item/Item'

function ItemList({items}) {
  return (
    
      items.map((prod) => <Item id={prod.id} nombre={prod.nombre} categoria={prod.categoria} precio={prod.precio} img={prod.img} stock={prod.stock}/>)
    
  )
}

export default ItemList