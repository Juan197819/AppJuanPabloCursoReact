import { useState } from "react";
import Button from './Button.js';

const  ItemCount1 = ({stock, initial, onAdd, style= {}})=> {
    
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
            <div className='flexRow '>
                <Button texto='-' func={disminuir}/>
                <p > Cantidad {number} </p>
                <Button texto='+' func={aumentar}/>
                {/* <button onClick={()=>aumentar()}> + </button> Otra forma de hacerlo el mismo boton de aumentar*/}
            </div>
                <Button clase={style.anchoCount} texto='Agregar al Carrito' func={onAdd}/>
        </div>
    )
}


export default ItemCount1