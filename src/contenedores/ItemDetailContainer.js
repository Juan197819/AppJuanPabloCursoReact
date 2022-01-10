import ItemDetail from '../components/ItemDetail.js'
import {getItem} from '../Base de datos y estilos/productos'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = ({greeting,onAdd})=>{ 

    const [item, setItem] = useState([]);
    const {itemId} = useParams();
    
    useEffect(() => {

        const list = getItem(itemId)
        list.then(list=>{
            setItem (list)
        }).catch(err=>console.log (err));
        return (() => {
            setItem ([])
       })
   }, [itemId])

    return(
        <>
        <h1>{greeting}</h1>
        <ItemDetail onAdd={onAdd} item= {item}/>
        </>
    )
}

export default ItemDetailContainer