import {Button} from './ItemCount'


const Item = (listado) => {
    return (
        <div className='flexCol cards '>
            <h3>{listado.nombre}</h3>
            <img className='prod' src={listado.foto} alt={listado.nombre}></img>
            <p>Precio ${listado.precio}</p>
            <Button texto={'Ver detalle de producto'} />
            <p>Stock disponible: {listado.stock}</p>
        </div>
    )
}

export default Item