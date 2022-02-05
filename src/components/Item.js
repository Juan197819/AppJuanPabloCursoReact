import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Item = (listado) => {
    const [prec, setPrec]= useState()
    const [modeloArt, setModeloArt]= useState()
    const [memoria, setMemoria]= useState()
    
    useEffect(() => {
        setPrec((listado.precio)?.toFixed(2))
        setModeloArt(` 49"`)
        setMemoria(`32 GB`)
        
    }, [listado])
    return (
        <div className='flexCol cards'>
           <h3>{listado.nombre}</h3>
            {(listado.nombre)?.includes('Tv') && <h3>{modeloArt}</h3>}
            {listado.categoria === 'Celulares y Tablets' &&<h4>{memoria}</h4>}

            <img className='fotoProductos' src={`.${listado.foto}`} alt={listado.nombre}></img>
            <p className='negrita'>Precio ${(prec)}</p>
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