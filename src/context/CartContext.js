import React, {useState} from "react"

const CartContext = React.createContext('') 

export const CartProvider= ({children})=>{

    const[cart, setCart] = useState([])
    const[cantCartWidget, setCantCartWidget] = useState(0)

    const removeItem= (e)=>{
        const idEliminado = (e.target.dataset.id || e.target.parentNode.dataset.id);
        const prodEliminado = (cart.filter(product=>product.id!=idEliminado));
        setCart([...prodEliminado]);
        sumarCant();
    }
    const setSeleccion=(item)=>{
        const comp = isInCart(item);
        if (comp==false) {
            setCart([...cart, item]);
            sumarCant(item.cantidad)
        }else{
            sumarCant()
        }
    }
    const isInCart = (item)=>{
        return cart.some(producto=> producto===item)
    }

    const sumarCant = (cantItemActual=0)=>{
        let subtotal = 0
        cart.forEach(element=> {
        subtotal = subtotal + Number(element.cantidad)
        })
        setCantCartWidget (cantItemActual+subtotal);
    }

    return(
        <CartContext.Provider value={{sumarCant,removeItem,setCart,cart,setSeleccion,setCantCartWidget,cantCartWidget}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext