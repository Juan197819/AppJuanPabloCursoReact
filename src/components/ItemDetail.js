import Button from './Button.js'
import {useState, useContext} from 'react'
import ItemCount1 from './ItemCount'
import {Link} from 'react-router-dom'
import CartContext from '../context/CartContext'

const ItemDetail = ({item}) => {

    const {addItem} =useContext(CartContext)

    const [agregado,setAgregado]= useState()
    const [color,setColor]= useState('Blanco')
    const [memoria,setMemoria]= useState(`Memoria Interna 32 GB`)

    const onAdd = (e)=>{
        setAgregado(true)
        const value = Number(e.target.value)
        item.stock = item.stock-value
        item.cantidad = value + Number(item.cantidad)
        addItem(item,value)
    }

    const colorChange = (e)=>{
        setColor(e.target.id)
    }
    const memoriaChange = (e)=>{
        setMemoria(`Memoria Interna ${e.target.id}`)
    }

    let valor=item.precio.toFixed(2)

    return (

    <div className='flexRow cards cardsDetalle'>
        <img className='fotoProductos' src={`.${item.foto}`} alt={item.nombre}></img>
        <div className='flexCol cardsDetalle'>
            <h3>{item.nombre}</h3>
            {item.categoria === 'Celulares y Tablets' &&<h6>{memoria}</h6>}
            <h3>${valor}</h3>
            <p>en 12 <span>x ${(valor/12).toFixed(2)} sin interes</span></p>
            <p className='p'>Articulos vendidos en los ultimos 6 meses: {(item.stock)*3} unidades</p>
            <div>
                <p style= {{color: 'blue'}}>Stock disponible: {item.stock} unidades</p>
            </div> 
            <div>
                <p>Color: {color}</p>
                <Button clase={`boton1${color}`} texto='Blanco' func={colorChange}/>
                <Button clase={`boton2${color}`} texto='Negro' func={colorChange}/>
            </div> 
            {item.categoria === 'Celulares y Tablets' &&
            <div>
                <p>Memoria Interna: </p>
                    <Button texto='32 GB' func={memoriaChange}/>
                    <Button texto='64 GB' func={memoriaChange}/>
                    <Button texto='128 GB' func={memoriaChange}/>
            </div>}
            {!agregado
            ? 
            <ItemCount1 onAdd={onAdd} style={{clase: 'detail', anchoCount:'anchoCount'}} stock= {item.stock} initial= {1} />
            :
            <div className='flexCol'>
                <Link className='boton' to={'/'} >Seguir comprando</Link>
                <Link className='boton' to={`/cart`} >Finalizar mi compra</Link>
            </div>}
        </div>
    </div>
    ) 
}

export default ItemDetail
