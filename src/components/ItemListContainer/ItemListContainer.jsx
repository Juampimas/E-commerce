import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.scss"


function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=> {
      if(categoryId){
        const db= getFirestore()
        const queryCollection = collection(db, "productos")
        const queryCollectionFilter = query(queryCollection, where("categoria", "==", categoryId))
        getDocs(queryCollectionFilter)
        .then(resp=> setItems(resp.docs.map(item =>({id: item.id, ...item.data()}))))
      }
      else{
        const db= getFirestore()
        const queryCollection = collection(db, "productos")
        getDocs(queryCollection)
        .then(resp=> setItems(resp.docs.map(item =>({id: item.id, ...item.data()}))))
      }
    }, [categoryId])        

  return (
    <section id='section1'>
        <ItemList items={items} />
    </section>
  )
}

export default ItemListContainer