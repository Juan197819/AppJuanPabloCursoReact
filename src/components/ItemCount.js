import { useState } from "react";

export const Button = ({texto,func})=>{
    return(
        <button onClick={func}>{texto}</button>
    )
}

const  ItemCount1 = ({stock, initial, onAdd})=> {
    
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
        <div className='flexCol div1'>
            <div className='flexRow div2'>
                <Button texto='-' func={disminuir}/>
                <p> Cantidad {number} </p>
                <Button texto='+' func={aumentar}/>
                {/* <button onClick={()=>aumentar()}> + </button> Otra forma de hacerlo el mismo boton de aumentar*/}
            </div>
                <Button texto='Agregar al Carrito' func={onAdd}/>
        </div>
    )
}


export default ItemCount1