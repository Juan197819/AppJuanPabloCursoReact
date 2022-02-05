import ItemDetail from '../components/ItemDetail.js'
import {getItem} from '../Base de datos y estilos/productos'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = ()=>{ 

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
        <ItemDetail item= {item}/>
    )
}

export default ItemDetailContainer