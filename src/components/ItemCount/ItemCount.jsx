import {useState} from 'react'
import "./ItemCount.scss"

function ItemCount({prod, initialStock, stock}) {

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

  return (
    <div className='ItemCount'>
        <button className="btn" onClick={remove}>-</button>
        {cant}
        <button className="btn" onClick={add}>+</button>
    </div>
  )
}

export default ItemCount