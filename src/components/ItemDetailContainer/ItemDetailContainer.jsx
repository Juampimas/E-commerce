import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import "./ItemDetailContainer.scss"


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=> {
      const db = getFirestore()
      const dbQuery = doc(db, "productos", id)
      getDoc(dbQuery)
      .then(resp => setItem({id: resp.id, ...resp.data()}))
    }, [id])


  return (
    <div className='ItemDetailContainer'>
        <ItemDetail prod={item} />
    </div>
  )
}

export default ItemDetailContainer