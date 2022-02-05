import { useState } from "react";
import Button from './Button.js';

const  ItemCount1 = ({onAdd,  stock, initial, style= {}})=> {

    const [number, setNumber] = useState(initial)

    const aumentar = ()=>{
        if (number < stock) {
            setNumber(number + 1)
        }
    }
    const disminuir = ()=>{
        if (number !== 1) {
            setNumber(number - 1)
        }
    }

    return(

        <div className= {`flexCol ${style.clase}`}>
            <div className='flexRow'>
                <Button texto='-' func={disminuir}/>
                <p>Cantidad {number}</p>
                <Button texto='+' func={aumentar}/>
            </div>
            <Button clase={style.anchoCount} value={number} texto={`Agregar al Carrito`} func={onAdd}/>
        </div>
    )
}
export default ItemCount1