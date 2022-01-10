import { Link } from 'react-router-dom'
import ItemCount1 from './ItemCount'

const Item = (listado,) => {
    const {onAdd} = listado
    return (
        <div className='flexCol cards'>
           { <h3>{listado.nombre}</h3>}
            <img className='fotoProductos' src={`.${listado.foto}`} alt={listado.nombre}></img>
            <p className='negrita'>Precio ${(listado.precio).toFixed(2)}</p>
            <Link className='boton' to={`/item/${listado.id}`}>Ver detalle de producto</Link>
            <ItemCount1 stock= {listado.stock} initial= {1} onAdd={onAdd}/>

            <p className='negrita'>Stock disponible: {listado.stock}</p>
        </div>
    )
}

export default Item