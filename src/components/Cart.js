import {useContext,useState} from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'
import {addDoc, collection,Timestamp, updateDoc,doc} from "firebase/firestore"
import {db} from "../services/firebase"

const Cart =()=>{
    const {cart, setCart,cantCartWidget,setCantCartWidget} = useContext(CartContext)
    const [form, setForm] = useState(false);
    const [idOrder, setIdOrder] = useState('');

    const sendOrders = (e)=>{
        e.preventDefault()
        const nombre = document.querySelector('#name').value;
        const mail= document.querySelector('#email').value;
        const tel = document.querySelector('#tel').value;
        cart.forEach(el=>{
            delete el.stock;
            updateDoc(doc(db,'Productos',el.id),{cantidad:0})})
        const comprador={
        nombreComprador: nombre,
        mailComprador: mail,
        telComprador: tel,
        fecha: Timestamp.fromDate(new Date()),
        productos: cart};
        orden(comprador)
    }
    const orden =(comprador)=>{
         addDoc(collection(db,'Ordenes'),comprador).then(({id})=>
            setIdOrder(id))
         setCart([])
         setCantCartWidget(0)
    }
    const carritoTotal= (cart)=>{
        let total=0;
        cart.forEach(element=> total = total+(element.cantidad*element.precio));
        return total
    }
    const clear= ()=>{
        cart.forEach(el=>{
            el.stock+=el.cantidad;
            el.cantidad =0;
            updateDoc(doc(db,'Productos',el.id),{
                cantidad: el.cantidad, 
                stock: el.stock})
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
         updateDoc(doc(db,'Productos',idEliminado),
         {
             cantidad: productoEliminado.cantidad, 
             stock: productoEliminado.stock})
    }
    const comprarCarrito = ()=>{
        setForm(true)
    }

    const evento = document.querySelector('#contact');

    evento?.addEventListener('submit', sendOrders)

    if (cart==false) {

        return (
            <>
                {idOrder?
                <>
                    <h2 className='margin20' >Su compra ha sido generada</h2>
                    <h2 className='margin20' >Su codigo de compra es {idOrder}</h2>
                </> 
                :
                <h2 className='margin20' >No hay objetos en el carrito</h2>}
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
                            product.stock+=1;
                            updateDoc(doc(db,'Productos',product.id),
                            {
                                cantidad: product.cantidad, 
                                stock: product.stock})
                    }}}>-</button>
                    <p className='botonCart'>{product.cantidad}</p> 
                    <button  className='botonCart'onClick={()=>{
                        if(product.stock>0){
                        product.cantidad+=1;
                        setCantCartWidget(cantCartWidget+1);
                        product.stock=product.stock-1;
                             updateDoc(doc(db,'Productos',product.id),
                             {
                                 cantidad: product.cantidad, 
                                 stock: product.stock})
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
    {(form==true)? 
    <>
    <h3  className='textCenter'>Complete sus datos para finalizar su compra</h3>
    <form action='' id='contact' className="flexCol formulario">
         <label>Nombre y Apellido</label>
         <input id='name' type="text" required name="name" placeholder='Nombre completo'></input>
         <label>Correo Electronico</label>
         <input id='email' type="email" required name="email" placeholder='email'></input>
         <label>Telefono</label>
         <input id='tel' type="text" required name="tel" placeholder='Telefono'></input>
    <button type="button" className='botonHome' onClick={sendOrders}>Confirmar compra</button>
    </form>
    </>
    :
    <button className='botonHome' onClick={()=>{comprarCarrito()}}>Comprar carrito</button>
}
    <Link className='botonHome' to={'/cart'} onClick={()=>{clear()}}>Vaciar carrito</Link>
    <Link className='botonHome' to={'/'} >Seguir comprando</Link>
    </>
    )
}
export default Cart