import ItemDetail from '../components/ItemDetail.js'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import {db} from "../services/firebase"

const ItemDetailContainer = ()=>{ 
    const [loading, setLoading] = useState(true)

    const [item, setItem] = useState([]);
    const {itemId} = useParams();
    
    useEffect(() => {
        getDoc(doc(db,'Productos',itemId)).then(querySnapshot => {
            const product ={id:querySnapshot.id,...querySnapshot.data()}
            setItem (product);
        }).catch(err => {
            console.log('Error en la carga del producto', err)
        }).finally(()=>{
            setLoading(false)
        })
   }, [itemId])
   if (loading===true) {
    return(
       <h2>Cargando producto...</h2> 
    )
}
    return(
        <ItemDetail item= {item}/>
    )
}

export default ItemDetailContainer