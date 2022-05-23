import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.scss"


function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();


    useEffect(() => {
      if(categoryId) {
        fetch("/data.json")
        .then((resultado) => resultado.json())
        .then((resp) => setItems(resp.filter((prods) => prods.categoria === categoryId)))
        .catch((err) => console.log(err))
      }
      else{
        fetch("/data.json")
        .then((resultado) => resultado.json() )
        .then((resp) => setItems(resp))
        .catch((err) => console.log(err))
      }
    },[categoryId]);
        

  return (
    <section id='section1'>
        <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer