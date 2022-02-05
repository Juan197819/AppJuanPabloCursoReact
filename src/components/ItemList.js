import React from 'react'
import Item from './Item'

const ItemList = ({productos=[]}) => {
    
    return (
        <div className='itemList flexRow'>
            {productos.map(product=>
            <Item categoria= {product.categoria} id={product.id} key = {product.id} nombre= {product.nombre} precio= {product.precio}  stock= {product.stock} foto={product.foto}  
            /> ) } 
        </div>
    )
}

export default ItemList
