import React from 'react'
import {Button} from './ItemCount'

const ItemDetail = ({item}) => {
    console.log (item.id)
    return (
        <div className='flexRow cards cardsDetalle'>
            <img className='prod' src={item.foto} alt={item.nombre}></img>
            <div className='flexCol cardsDetalle'>
                <h3>{item.nombre}</h3>
                <h3>${item.precio}</h3>
                <p>en 12 <span>x ${((item.precio)/12).toFixed(2)} sin interes</span></p>
                <h4>Descripcion del producto</h4>
                <p>La Tablet GADNIC TAB0038C posee un procesador Quad Core de 1.3 GHZ y memoria RAM de 2 GB, sistema operativo Android. Su pantalla de 7 pulgadas soporta videos Super HD 2160P.</p>

                <div>
                    <p>Color:</p>
                    <Button  texto='Negro' />
                    <Button texto='Blanco' />
                </div> 
                <p>Memoria Interna: </p>
                <div>
                    <Button  texto='32 GB' />
                    <Button texto='64 GB' />
                    <Button texto='128 GB' />
                </div> 
            </div>
        </div>
    )
}

export default ItemDetail
