import { Link } from 'react-router-dom'

const Item = (listado) => {
    return (
        <div className='flexCol cards'>
           <h3>{listado.nombre}</h3>
            {listado.categoria === 'Celulares y Tablets' &&<h4>32 GB</h4>}
            <img className='fotoProductos' src={`.${listado.foto}`} alt={listado.nombre}></img>
            <p className='negrita'>Precio ${(listado.precio.toFixed(2))}</p>
            {listado.stock!==0
            ?
            <>
            <Link className='boton' to={`/item/${listado.id}`}>Ver detalle de producto</Link>
            <p className='negrita'>Stock disponible: {listado.stock}</p>
            </>
            :
            <Link className='colorRojo' to={`/`}>No hay stock disponible</Link>
            }
        </div>
    )
}

export default Item