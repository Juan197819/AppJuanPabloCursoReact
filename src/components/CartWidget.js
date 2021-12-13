const CartWidget = ({valorCarrito})=> {
    
    return (
        <picture className='icoCarrito logo flexRow'>
            <img className='logoCarrito' src= '/imagenes/icoCarrito.png' alt='Carrito' />
            <p className= 'textCenter'>{valorCarrito}</p>
        </picture>
    )
}

export default CartWidget