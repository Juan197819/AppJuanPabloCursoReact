import React, {useState} from "react"
import {updateDoc,doc} from "firebase/firestore"
import {db} from "../services/firebase"

const CartContext = React.createContext('') 

export const CartProvider= ({children})=>{

    const[cart, setCart] = useState([])
    const[cantCartWidget, setCantCartWidget] = useState(0)

    const addItem=(item)=>{
        const comp = isInCart(item);
        if (comp==false) {
            let newCart=[...cart, item]
            setCart(newCart);
            sumarCant(newCart)
        }else{
            let newCart = (cart.filter(product=>product.id!=item.id));
            setCart([item,...newCart]);
            newCart =[item,...newCart]
            sumarCant(newCart)
        }
        updateDoc(doc(db,'Productos',item.id), {
            cantidad: item.cantidad, 
            stock: item.stock})
    }

    const isInCart = (item)=>{
        return cart.some(producto=> producto.id==item.id)
    }

    const sumarCant = (value)=>{
        let subtotal = 0
        value.forEach(element=> {
        subtotal = subtotal + Number(element.cantidad)
        })
        setCantCartWidget(subtotal)
    }

    return(
        <CartContext.Provider value={{setCart,cart,addItem,setCantCartWidget,cantCartWidget}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext