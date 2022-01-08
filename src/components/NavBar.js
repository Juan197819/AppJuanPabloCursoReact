import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = ({valorCarrito}) => {
    
    return (
        <header>
            <nav className= 'flexRow navBar'>
                <picture className= 'logo'>
                    <Link to={'/'}> 
                        <img className= 'logo' src= "../imagenes/image2.png" alt= "Logo de la Tienda"/>   
                    </Link>
                </picture>
                    <Link to={'/'}>Home</Link>
                    <Link to={`/category/Audio y Video`}>Audio y Video</Link>
                    <Link to={'/category/Celulares y Tablets'}>Celulares y Tablets</Link>
                    <Link to={'/category/Notebooks'}>Notebooks</Link>
                    <Link to={'/category/Gamer'}>Gamer</Link>
                <CartWidget valorCarrito={valorCarrito} />
            </nav>
        </header>
        
    )
}

export default NavBar