import ItemList from '../components/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs,where,query} from "firebase/firestore"
import {db} from "../services/firebase"

const ItemListContainer = ()=> {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true);
        if (categoryId) {
            getDocs(query(collection(db,'Productos'),where('categoria', '==' , categoryId ))).then(querySnapshot => {
                const productsbycategory = querySnapshot.docs.map(doc=> {
                    return {id:doc.id,...doc.data()}
                }) 
                setProductos(productsbycategory)
            }).catch(err => {
                console.log('Error en la carga por categoria', err)
            }).finally(()=>{
                setLoading(false)
            })
        }else{
            getDocs(collection(db,'Productos')).then(querySnapshot => {
                const products = querySnapshot.docs.map(doc=> {
                    return {id:doc.id,...doc.data()}
                }) 
                setProductos(products)
            }).catch(err => {
                console.log('Error en la carga de la lista', err)
            }).finally(()=>{
                setLoading(false)
        })}
        
        return (() => {
            setProductos ([])
       })
   }, [categoryId])

   if (loading===true) {
       return(
          <h2>Cargando listado de productos..</h2> 
        )
   }
   return(
            <ItemList productos={productos} />
    )
}

export default ItemListContainer 

