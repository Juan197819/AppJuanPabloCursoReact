import ItemCount1 from './ItemCount'

const ItemListContainer = ({greeting})=> {
    
    const onAdd = ()=>{
        console.log('Se agrego al carrito')   
     }

    return(
        <>
            <h1>{greeting}</h1>
            <ItemCount1 stock= {10} initial= {1} onAdd={onAdd}/>
       </> 
    )
    
}
export default ItemListContainer 