import ItemCount1 from './ItemCount'
import ItemList from './ItemList'
import arrayProductos from './productos'
import {useState, useEffect} from 'react'

const promesaProd = ()=>{ 
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve (arrayProductos)
        }, 2000)
    })
}

const ItemListContainer = ({greeting})=> {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        const list = promesaProd()
        list.then(list=>{
            setProductos (list)
        }) 
        return (() => {
            setProductos ([])
       })
   }, [])

    const onAdd = ()=>{
        console.log('Se agrego al carrito')   
    }

    return(
        <>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
            <ItemCount1 stock= {10} initial= {1} onAdd={onAdd}/>
       </> 
    )
}

export default ItemListContainer 

