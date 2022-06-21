import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.scss"
import Loading from '../Loading/Loading';


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loader, setLoader] = useState(true)

    useEffect(()=> {
      const db = getFirestore()
      const dbQuery = doc(db, "productos", id)
      getDoc(dbQuery)
      .then(resp => setItem({id: resp.id, ...resp.data()}))
      .finally(()=> setLoader(false))
    }, [id])


  return (
    <div className='ItemDetailContainer'>
      {loader ? <Loading/> : <ItemDetail prod={item} />}
    </div>
  )
}

export default ItemDetailContainer