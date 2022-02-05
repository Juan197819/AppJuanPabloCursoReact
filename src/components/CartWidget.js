import {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'


const CartWidget = ()=> {
    
    const {cantCartWidget} = useContext(CartContext)
    return (
        <picture className='icoCarrito logo flexRow'>
            <Link className='logoCarrito logo flexRow' to={'/cart'} >
                <img src= '/imagenes/icoCarrito.png' alt='Carrito' />
            </Link>
            {cantCartWidget!==0&&<p className= 'textCenter'>{(cantCartWidget)}</p>}
        </picture>
    )
}

export default CartWidget