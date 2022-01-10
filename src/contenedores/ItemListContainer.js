import ItemList from '../components/ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getItemByCategory, promesaProd} from '../Base de datos y estilos/productos'


const ItemListContainer = ({greeting,onAdd})=> {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        if (categoryId) {
            const list =getItemByCategory(categoryId)
            list.then(list => {
                setProductos(list)
            })
        }else{
            const list = promesaProd()
            list.then(list=>{
                setProductos (list)
        }) }
        return (() => {
            setProductos ([])
       })
   }, [categoryId])


    return(
        <>
            <h1>{greeting}</h1>
            
            <ItemList productos={productos} onAdd={onAdd}/>
       </> 
    )
}

export default ItemListContainer 

