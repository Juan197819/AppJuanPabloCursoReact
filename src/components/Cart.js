import {useContext} from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart =()=>{
    const {cart, setCart,cantCartWidget,setCantCartWidget} = useContext(CartContext)
    
    const carritoTotal= (cart)=>{
        let total=0;
        cart.forEach(element=> total = total+(element.cantidad*element.precio));
        return total
    }

    const clear= ()=>{
        cart.forEach(el=>{
            el.stock+=el.cantidad;
            el.cantidad =0;
        })
        setCart([])
        setCantCartWidget(0)
    }

    let removeItem= (e)=>{

        const idEliminado = (e.target.dataset.id || e.target.parentNode.dataset.id);
        const newCart = (cart.filter(product=>product.id!=idEliminado));
        const [productoEliminado] = (cart.filter(product=>product.id==idEliminado));

        setCart([...newCart]);
        productoEliminado.stock+= productoEliminado.cantidad
        setCantCartWidget(cantCartWidget-productoEliminado.cantidad)
        productoEliminado.cantidad=0
    }

    if (cart==false) {
        return (
        <>
        <h2 className='margin20' >No hay objetos en el carrito</h2>
        <Link className="botonHome" to={'/'}>Volver al Home</Link> 
        </>
        )
    }

    return(
    <>
    <table>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th colSpan="2">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {cart.map(product=> 
            <tr className='trCart' key= {product.id}>
                <td>
                    <img className='fotoProductos' src={`.${product.foto}`} alt={product.foto}></img>
                </td>
                <td>{product.nombre}</td>
                <td>${product.precio.toFixed(2)}</td>
                <td className='contCart'>
                    <button  className='botonCart'onClick={()=>{
                        if(product.cantidad !== 1){
                            product.cantidad-=1;
                            setCantCartWidget(cantCartWidget-1);
                            product.stock+=1

                    }}}>-</button>
                    <p className='botonCart'>{product.cantidad}</p> 
                    <button  className='botonCart'onClick={()=>{
                        if(product.stock>0){
                        product.cantidad+=1;
                        setCantCartWidget(cantCartWidget+1);
                        product.stock=product.stock-1
                        
                    }}}>+</button>
                </td>
                <td>${(product.cantidad*product.precio).toFixed(2)}</td>
                <td>
                    <button value={product.id} data-id={product.id} className={'cesto boton'} onClick={removeItem}>
                        <img className={'cesto'} src= '/imagenes/cesto.png' alt='Eliminar'/>
                        <span className='displayNone'>Eliminar</span>
                    </button>
                </td>
            </tr>)}
        </tbody>
        <tfoot>
            <tr>
                <th colSpan="6">
                    <span className='total'>Total valor del carrito ${(carritoTotal(cart)).toFixed(2)}</span>
                </th>
            </tr>
        </tfoot>
    </table>

    <Link className='botonHome' onClick={()=>{}}>Comprar carrito</Link>
    <Link className='botonHome' to={'/cart'} onClick={()=>{clear()}}>Vaciar carrito</Link>
    <Link className='botonHome' to={'/'} >Seguir comprando</Link>
    </>
    )
}
export default Cart