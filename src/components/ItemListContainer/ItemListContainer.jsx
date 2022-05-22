import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.scss"


function ItemListContainer() {

    const [items, setItems] = useState([]);


    useEffect(() => {
      fetch("../../data.json")
      .then((resultado) => resultado.json() )
      .then((resp) => console.log(resp))
    },[]);
        

  return (
    <section id='section1'>
        <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer