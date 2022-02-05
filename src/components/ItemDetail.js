import React from 'react'
import Button from './Button.js'
import {useState, useEffect, useContext} from 'react'
import ItemCount1 from './ItemCount'
import {Link} from 'react-router-dom'
import CartContext from '../context/CartContext'

const ItemDetail = ({item}) => {

    const {setSeleccion} =useContext(CartContext)

    const [prec,setPrec]= useState()
    const [modeloArt,setModeloArt]= useState()
    const [memoria,setMemoria]= useState()
    const [valor,setValor]= useState('')
    
    const onAdd = (e)=>{
        setValor(e.target.value);

        if (!(item.cantidad)) {
            item.cantidad = Number(e.target.value);
            item.stock = item.stock-item.cantidad;
        } else {
            item.stock = item.stock-Number(e.target.value);
            item.cantidad = Number(e.target.value) + Number(item.cantidad);
        }
        setSeleccion(item)
        console.log(`Se agregaron al carrito ${e.target.value} unidades`);
    }
    

    const precioModeloArt = (e)=>{
        const v=(e.target.id)
        console.log(v); 
        setModeloArt(v);
        setMemoria(`Memoria Interna ${v}`)

        switch (true) {
            case (v==='55"'):
                setPrec((item.precio*1.5).toFixed(2))
                break;
            case (v==='49"'):
                setPrec(item.precio.toFixed(2))
                break;
            case (v==='32"'):
                setPrec(((item.precio)*0.7).toFixed(2))
                break;

            case (v==='32 GB'):
                setPrec(item.precio.toFixed(2))
                break;
            case (v==='64 GB'):
                setPrec(((item.precio)*1.05).toFixed(2))
                break;
            case (v==='128 GB'):
                setPrec(((item.precio)*1.1).toFixed(2))
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setPrec((item.precio)?.toFixed(2))
        setModeloArt(` 49"`)
        setMemoria(`Memoria Interna 32 GB`)
    }, [item,valor,])

    return (

    <div className='flexRow cards cardsDetalle'>
        <img className='fotoProductos' src={`.${item.foto}`} alt={item.nombre}></img>
        <div className='flexCol cardsDetalle'>
            <h3>{item.nombre}</h3>
            {(item.nombre)?.includes('Tv') && <h3>{modeloArt}</h3>}
            {item.categoria === 'Celulares y Tablets' &&<h6>{memoria}</h6>}
            <h3>${prec}</h3>
            <p>en 12 <span>x ${((prec)/12).toFixed(2)} sin interes</span></p>
            <p className='p'>Articulos vendidos en los ultimos 6 meses: {(item.stock)*3} unidades {valor}</p>
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
                    <Button texto='32 GB' func={precioModeloArt}/>
                    <Button texto='64 GB' func={precioModeloArt}/>
                    <Button texto='128 GB' func={precioModeloArt}/>
            </div>}
            {(item.nombre)?.includes('Tv') && 
            <div>
                <p>Cantidad de pulgadas: </p>
                <Button texto='32"' func={precioModeloArt}/>
                <Button texto='49"' func={precioModeloArt}/>
                <Button texto='55"' func={precioModeloArt}/>
            </div>}

            {!valor
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
