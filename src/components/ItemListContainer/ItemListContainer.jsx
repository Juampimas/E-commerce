import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.scss"
import Loading from '../Loading/Loading';


function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [loader,setLoader] = useState(true);

    useEffect(()=> {
      if(categoryId){
        const db= getFirestore()
        const queryCollection = collection(db, "productos")
        const queryCollectionFilter = query(queryCollection, where("categoria", "==", categoryId))
        getDocs(queryCollectionFilter)
        .then(resp=> setItems(resp.docs.map(item =>({id: item.id, ...item.data()}))))
        .finally(() => setLoader(false))
      }
      else{
        const db= getFirestore()
        const queryCollection = collection(db, "productos")
        getDocs(queryCollection)
        .then(resp=> setItems(resp.docs.map(item =>({id: item.id, ...item.data()}))))
        .finally(() => setLoader(false))
      }
    }, [categoryId])        

  return (
    <section id='section1'>
      {loader ? <Loading/> : <ItemList items={items} />}
        
    </section>
  )
}

export default ItemListContainer