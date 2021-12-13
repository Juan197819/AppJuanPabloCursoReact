import './Navbar.css'
import CartWidget from './CartWidget'

const NavBar = ({valorCarrito}) => {
    
    return (
        
        <nav className= 'flexRow navBar'>
            <picture className= 'logo'>
                <img className= 'logo' src= "./imagenes/image2.png" alt= "Logo de la Tienda"/>   
            </picture>
            <ul className= 'flexRow'>
                <li>
                    <a  href="/#">Home</a>
                </li>
                <li>
                    <a href="/#">Nuestros Productos</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
            </ul>
            <CartWidget valorCarrito={valorCarrito} />
        </nav>
        
    )
}

export default NavBar