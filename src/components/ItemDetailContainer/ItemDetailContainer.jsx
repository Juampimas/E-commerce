import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemList from '../ItemList/ItemList';
import "./ItemDetailContainer.scss"


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/data.json")
            .then(respuesta => respuesta.json())
            .then(itemList => itemList.find(prod => prod.id === id))
            .then(resp => setItem(resp))
            .catch((err) => console.log(err))
        }, 1000);
    },[id]);

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail prod={item} />
    </div>
  )
}

export default ItemDetailContainer