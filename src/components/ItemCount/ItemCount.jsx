import {useState} from 'react'

import "./ItemCount.scss"

function ItemCount({initialStock, stock, onAdd}) {

    const[cant, setCant] = useState(initialStock)

    function remove() {
        if(cant != initialStock){
            setCant(cant - 1)
        }
        else{
            return initialStock;
        }
    }
    function add() {
        if(cant < stock){
            setCant(cant + 1)
        }
        else{
            return cant
        }
    }

    function addItem() {
        onAdd(cant);
        console.log(cant);
    }

  return (
    <div className='ItemCount'>
        <button className="btn" onClick={remove}>-</button>
        {cant}
        <button className="btn" onClick={add}>+</button>
        <button className="btn" onClick={addItem}>Añadir al Carrito</button>
    </div>
  )
}

export default ItemCount