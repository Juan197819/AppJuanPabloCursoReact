import './Navbar.css'

const NavBar = () => {
    return (
        <nav className= 'flexRow navBar'>
            <picture>
                <img src= "" alt= "Logo de la Tienda"/>   
            </picture>
            <ul className= 'flexRow'>
                <li>
                    <a  href="#">Home</a>
                </li>
                <li>
                    <a href="#">Nuestros Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar