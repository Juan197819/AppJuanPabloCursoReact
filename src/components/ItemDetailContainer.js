import ItemDetail from './ItemDetail.js'
import arrayProductos from './productos'
import {useState, useEffect} from 'react'

console.log (arrayProductos[1].nombre)
const getItem = ()=>{ 
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            resolve (arrayProductos[9])
        }, 2000)
    })
}

const ItemDetailContainer = ()=>{

    const [item, setItem] = useState([])
    console.log (item)

    useEffect(() => {
        const list = getItem()
        list.then(list=>{
            setItem (list)
        }) 
        return (() => {
            setItem ([])
       })
   }, [])
   
    return(
        <ItemDetail item= {item}/>
    )
}

export default ItemDetailContainer