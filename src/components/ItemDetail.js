import React from 'react'
import Button from './Button.js'
import {useState, useEffect} from 'react'
import ItemCount1 from './ItemCount'

const ItemDetail = ({item,onAdd}) => {

    const [prec,setPrec]= useState()
    const [pulgadas,setPulgadas]= useState()
    const [memoria,setMemoria]= useState()
    

    const precioPulgada = (e)=>{
        setPulgadas(e.target.value)
        setMemoria(`Memoria Interna ${e.target.value}`)

        switch (true) {
            case (e.target.value==='55"'):
                setPrec((item.precio*1.5).toFixed(2))
                break;
            case (e.target.value==='49"'):
                setPrec(item.precio.toFixed(2))
                break;
            case (e.target.value==='32"'):
                setPrec(((item.precio)*0.7).toFixed(2))
                break;

            case (e.target.value==='32 GB'):
                setPrec(item.precio.toFixed(2))
                break;
            case (e.target.value==='64 GB'):
                setPrec(((item.precio)*1.05).toFixed(2))
                break;
            case (e.target.value==='128 GB'):
                setPrec(((item.precio)*1.1).toFixed(2))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setPrec(item.precio)
        setPulgadas(` 49"`)
        setMemoria(`Memoria Interna 32 GB`)
    }, [item])

    return (
        
        <div className='flexRow cards cardsDetalle'>
            <img className='fotoProductos' src={`.${item.foto}`} alt={item.nombre}></img>
            <div className='flexCol cardsDetalle'>
                <h3>{item.nombre}</h3>
                {item.categoria === 'Audio y Video' &&<h3>{pulgadas}</h3>}
                {item.categoria === 'Celulares y Tablets' &&<h6>{memoria}</h6>}
                <h3>${prec}</h3>
                <p>en 12 <span>x ${((prec)/12).toFixed(2)} sin interes</span></p>
                <p className='p '>Articulos vendidos en los ultimos 6 meses: {(item.stock)*3} unidades</p>

                <div>
                    <p style= {{color: 'blue'}}>Stock disponible: {item.stock} unidades</p>
                </div> 
                <div>
                    <p>Color:</p>
                    <Button  texto='Negro' />
                    <Button texto='Blanco' />
                </div> 
                
                {item.categoria === 'Celulares y Tablets' &&
                <div>
                    <p>Memoria Interna: </p>
                        <Button texto='32 GB' func={precioPulgada}/>
                        <Button texto='64 GB' func={precioPulgada}/>
                        <Button texto='128 GB' func={precioPulgada}/>
                </div>}
                {item.categoria === 'Audio y Video' &&
                <div>
                    <p>Cantidad de pulgadas: </p>
                    <Button texto='32"' func={precioPulgada}/>
                    <Button texto='49"' func={precioPulgada}/>
                    <Button texto='55"' func={precioPulgada}/>
                </div>}

                <ItemCount1 style={{clase: 'detail', anchoCount:'anchoCount'}} stock= {item.stock} initial= {1} onAdd={onAdd}/>

            </div>
        </div>
    )
}

export default ItemDetail
